/*  

these are some mock response ,when /query wil get hit with some query question the this mock data will be fetched to response 
in real life product this is not followed ,as instructed for this assignment,this mock data response will be used 
*/



const queryRes={
    "total sales":{
        sqlQuery:"SELECT SUM(price*quantity) FROM Orders",
        mockResult:{total_sale:5000}
    },
    "total customers":{
        sqlQuery:"SELECT COUNT(DISTINT cuetomer_id) FROM Users",
        mockResult:{total_customer:500}
    },
    "avarage sales per month":{
        sqlQuery:"SELECT product, SUM(quantity) AS total_sold FROM Orders GROUP BY product ORDER BY total_sold DESC LIMIT 1",
        mockResult:{avg_sales_per_month:5000}
    },
    "most sold product":{
        sqlQuery:"SELECT product, SUM(quantity) AS total_sold FROM Orders GROUP BY product ORDER BY total_sold DESC LIMIT 1",
        mockResult:{product :"Laptop",total_sold:345}
    },
    "monthly revenue breakdown":{
        sqlQuery:"SELECT strftime('%Y-%m', order_date) AS month, SUM(price*quantity) AS revenue FROM Orders GROUP BY month",
        mockResult:[
            {month:"2025-01",revenue:5000},
            {month:"2025-02",revenue:6000},
        ]
    },
    "top customers":{
        sqlQuery:"SELECT customer_id, SUM(price*quantity) AS total_spent FROM Orders GROUP BY customer_id ORDER BY total_spent DESC LIMIT 5",
        mockResult:[
            {customer_id:21,total_spent:4500},
            {customer_id:41,total_spent:7500},
            {customer_id:132,total_spent:9500},
            {customer_id:54,total_spent:12500},
        ]
    },
}

module.exports=queryRes