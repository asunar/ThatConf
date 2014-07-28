require 'minitest/autorun'
require 'minitest/hell'
require 'watir-webdriver'
class AcceptanceTests <MiniTest::Test
  def test_default_tags 
    @default_tags.each { |tag| assert(@b.text.include?(tag) )} 
  end

	def populate_item_fields(name, description, tags)
		@name_field.set(name)
		@description_field.set(description)
		tags.each { |tag| select_or_create_tag(tag)  }
	end
	
	def select_or_create_tag(tag)
		tag_checkbox = @b.checkbox(:name, tag)
		
		if tag_checkbox.exists?
			tag_checkbox.set
		else
			populate_custom_tag(tag)
		end	
	end

	def populate_custom_tag(tag)
		tagText = @custom_tags.text.empty? ? tag : ", " + tag 
		@custom_tags.set(tagText)
	end

	def test_add
		buy_count_before = @buy_count_field.text.to_i
		@add_link.click
		assert(@b.url.include?("Add"))
		assert(@b.text.include?("Name"))
		assert(@b.text.include?("Description"))
		@default_tags.each { |tag| assert(@b.text.include?(tag) )} 
		populate_item_fields("Diaper Pail", "Dekor", ["Buy", "Amazon"])	
		@save_link.click	
		@tags_link.click
		buy_count_after = @buy_count_field.text.to_i
		assert_equal(buy_count_before + 1, buy_count_after)
		assert(@b.text.include?("Amazon"))
		@buy_count_field.click
		assert(@b.text.include?("Diaper Pail"), "No diaper pail")
	end

	def add_item(name, description, tags=[])
		@add_link.click
		populate_item_fields(name, description, tags)
		@save_link.click
	end

	def test_items
		original_name = "Test name"
		original_desc = "Test desc"
		add_item(original_name, original_desc)
		@items_link.click
		assert(@b.text.include?(original_name))
		assert(@b.text.include?(original_desc))
	end

	def test_delete
		original_name = "Test name"
		original_desc = "Test desc"
		add_item(original_name, original_desc)
		@items_link.click
		item_link = @b.link(:text, "#{original_name} #{original_desc}")
		delete_link = item_link.element(:xpath => './following-sibling::*')
		delete_link.click
		@b.alert.ok
		@items_link.click
		assert(!@b.text.include?(original_name));
		
	end

	def test_update
		original_name = "Test name"
		original_desc = "Test desc"
		updated_name = "Updated Name"
		updated_desc = "Updated Desc"
		dummy_custom_tag = "Dummy Custom Tag"
		add_item(original_name, original_desc)
		@items_link.click
		item_link = @b.link(:text, "#{original_name} #{original_desc}")
		item_link.click
		populate_item_fields(updated_name, updated_desc, ["Donate", dummy_custom_tag])	
		@save_link.click
		@items_link.click
		assert(@b.text.include?(updated_name));
		assert(@b.text.include?(updated_desc));
		assert(!@b.text.include?(original_name), "Original name should not exist");
		assert(!@b.text.include?(original_desc), "Original description should not exist");
		item_link = @b.link(:text, "#{updated_name} #{updated_desc}")
		item_link.click
		assert(@b.text.include?(dummy_custom_tag));


	
	end



	def test_delete_one_item
		original_name = "Test name"
		original_desc = "Test desc"
		add_item(original_name, original_desc, ["DummyTag"])
		@b.link(:href, "#Items?tag=DummyTag").click
		@b.link(:text, "Delete").click
		@b.alert.ok
		@items_link.click
		assert(!@b.text.include?(original_name));
		assert(!@b.text.include?(original_desc));
		
	end

	def test_delete_cancel
		original_name = "Test name"
		original_desc = "Test desc"
		add_item(original_name, original_desc)
		@items_link.click
		item_link = @b.link(:text, "#{original_name} #{original_desc}")
		delete_link = item_link.element(:xpath => './following-sibling::*')
		delete_link.click
		@b.alert.close
		@items_link.click
		assert(@b.text.include?(original_name));
		
	end	
	def test_select
		@select_link.click
		@b.h3(:text, "Hospital Pack List").click
		@b.h3(:text, "Socks (mom)").click
		@b.link(:text, "Items").click
		assert(@b.text.include?("Socks (mom)"))
		
	end

	def test_item_without_name_not_saved
		@add_link.click
		@save_link.click
		assert(@b.url.include?("Add"))
	end

	def test_add_remove_items_from_catalog_multiple_times
		@select_link.click
		@b.h3(:text, "Hospital Pack List").click
		socksLink = @b.h3(:text, "Socks (mom)")
		socksLink.click #added
		socksLink.click #removed
		socksLink.click #added
		socksLink.click #removed
		@b.link(:text, "Items").click
		assert(!@b.text.include?("Socks (mom)"))
	end

	def setup
		
		@b = Watir::Browser.new :chrome
		@homeUrl = "file:///C:/code/newbabybirdie/index.html" 
		@default_tags = ["Buy", "Borrow", "Donate", "Return"]
		@save_link = @b.link(:text, "Save")
		@add_link = @b.link(:text, "Add")
		@select_link = @b.link(:text, "Select")
		@tags_link = @b.link(:text, "Tags")
		@items_link = @b.link(:text, "Items")
		@name_field = @b.text_field(:id, "name")
		@description_field = @b.text_field(:id, "description")
		@buy_count_field = @b.span(:id, "BuyCount")
		@buy_checkbox = @b.checkbox(:name, "Buy")
		@custom_tags = @b.text_field(:id, "customTags")
		@b.goto(@homeUrl)
		
	end

	def teardown
		@b.close
	end
end	
