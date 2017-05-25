Q1
select countries.name, languages.language, languages.percentage
from countries, languages
where countries.id = languages.country_id
and languages.language = 'Slovene'
order by languages.percentage DESC;

Q2
select countries.name, count(cities.country_id) as total_number_of_cities
from countries, cities
where countries.id = cities.country_id
group by countries.name
order by count(cities.country_id) DESC;

Q3
select  cities.name, cities.population
from cities, countries
where cities.country_id = countries.id
and countries.name = 'Mexico'
and cities.population >= 500000
order by cities.population DESC;

Q4
select countries.name, languages.language, languages.percentage
from countries, languages
where countries.id = languages.country_id
and languages.percentage > 89
order by languages.percentage DESC;

Q5
select countries.name, countries.surface_area, countries.population
from countries
where surface_area < 501
and population > 100000;

Q6
select name, government_form, life_expectancy, capital
from countries
where government_form = 'Constitutional Monarchy'
and capital > 200 and life_expectancy > 75;

Q7
select countries.name, cities.name, cities.district, cities.population
from countries, cities
where countries.id = cities.country_id
and cities.district = 'Buenos Aires'
and cities.population > 500000;
