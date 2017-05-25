Q1
select sum(billing.amount) as total_revenue
from billing
where  charged_datetime like '%2012-03%';

Q2
select clients.first_name, clients.last_name, sum(billing.amount) as total_revenue
from billing, clients
where clients.client_id = billing.client_id
and clients.client_id = 2;

Q3
select clients.first_name, clients.last_name, sites.domain_name
from clients, sites
where clients.client_id = sites.client_id
and clients.client_id = 10;

Q4
