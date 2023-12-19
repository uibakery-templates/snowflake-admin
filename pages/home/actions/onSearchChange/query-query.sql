SELECT
  *
from
  CUSTOMERS
WHERE
  (FIRST_NAME LIKE {{'%'+ui.searchCustomerName.value+'%'}})
  or (LAST_NAME LIKE {{'%'+ui.searchCustomerName.value+'%'}});