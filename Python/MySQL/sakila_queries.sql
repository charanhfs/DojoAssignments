Q1
select customer.first_name, customer.last_name, customer.email, address.address
from customer, address, city
where customer.address_id = address.address_id
and address.city_id = city.city_id
and address.city_id = 312;

Q2
select film.title, film.description, film.release_year, film.rating, film.special_features, category.name
from film, film_category, category
where film.film_id = film_category.film_id
and film_category.category_id = category.category_id
and category.name = 'Comedy';

Q3
select actor.actor_id, actor.first_name, actor.last_name, film.title, film.description, film.release_year
from actor, film_actor, film
where actor.actor_id = film_actor.actor_id
and film_actor.film_id = film.film_id
and actor.actor_id = 5;

Q4
select customer.first_name, customer.last_name, customer.email, address.address
from customer, address, city
where customer.address_id = address.address_id
and address.city_id = city.city_id
and customer.store_id = 1
and city.city_id IN (1, 42, 312, 459);

Q5
select film.title, film.description, film.release_year, film.rating, film.special_features
from film, film_actor, actor
where film.film_id = film_actor.film_id
and film_actor.actor_id = actor.actor_id
and film.rating = 'G'
and actor.actor_id =15
and film.special_features like '%behind the scenes%';

Q6
select film.film_id, film.title, actor.actor_id, actor.first_name, actor.last_name
from film, actor, film_actor
where film.film_id = film_actor.film_id
and film_actor.actor_id = actor.actor_id
and film.film_id = 369;

Q7
select film.title, film.description, film.release_year, film.rating, film.special_features, category.name
from film, film_category, category
where film.film_id = film_category.film_id
and film_category.category_id = category.category_id
and category.name = 'Drama'
and film.rental_rate = 2.99;

Q8
select film.title, film.description, film.release_year, film.rating, film.special_features, category.name, actor.first_name, actor.last_name
from film, film_actor, actor, film_category, category
where film.film_id = film_actor.film_id
and film_actor.actor_id = actor.actor_id
and film.film_id = film_category.film_id
and category.category_id = film_category.category_id
and actor.first_name = 'Sandra' and actor.last_name = 'Kilmer';
