require 'nokogiri'
require 'open-uri'

country = "gb"
area = "birmingham"
date = "2023-8-20"

puts "hello"

url = "https://www.wunderground.com/history/daily/#{country}/#{area}/EGBB/date/#{date}"
url = "https://www.wunderground.com/history/daily/gb/birmingham/EGBB/date/2023-8-20"
# 'https://www.wunderground.com/history/daily/gb/birmingham/EGBB/date/2023-7-19'

page = Nokogiri::HTML(URI.open(url))

temperature_elements = page.css('.wu-value.wu-value-to')
target_element = page.css("*:contains('High Temp')")

temperature_elements.each do |element|
  puts "here's a temp element: #{element&.text.strip}"
end
puts temperature_elements.length
# puts "here's the average temp: #{temperature_element&.text.strip}"
