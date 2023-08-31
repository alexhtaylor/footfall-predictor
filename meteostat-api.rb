require 'rest-client'
require 'json'

api_key = "94a0d87e62msh61db71d4613564bp184cdfjsnbd9f1c3f54ec"

station_id = '10637'  # Example station ID
date = '2023-08-01'   # Example date

url = "https://api.meteostat.net/v2/stations/#{station_id}/#{date}?key=#{api_key}"

begin
  response = RestClient.get(url)
  data = JSON.parse(response.body)

  # Print the retrieved data
  puts JSON.pretty_generate(data)
rescue RestClient::ExceptionWithResponse => e
  puts "Error: #{e.response}"
end
