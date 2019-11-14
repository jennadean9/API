# <span style="color: blue"> **Stock Information API** </span>

## This project is a functioning Application Programming Interface that allows users to browse through, delete, update, and create various popular companies that are on the stock market.

this will be an image

### How to Use

Base URL: /stock
_Table 1_

|   Query    |           Path           | Description                                           |
| :--------: | :----------------------: | ----------------------------------------------------- |
|  **POST**  |         `/stock`         | create a new object/entry                             |
|  **GET**   |         `/stock`         | browse all objects in database                        |
|  **GET**   | `/stock/symbol/{symbol}` | find by company's ticker symbol                       |
|  **GET**   |   `/stock/name/{name}`   | find by company name                                  |
|  **GET**   | `/stock/sector/{sector}` |
|  **GET**   |       `/stock/{id}       |
| **DELETE** |      `/stock/{id}`       | find an object by the id and delete the entire object | String. |

### Features

Using Express.js and MongoDB, I created an API that.....

### Future Goals

In the very near future, I will be using this API and creating a full-stack application that incorporates another API called "Alpha Vantage" to update each stock with real-time data of the stock, when a company name is clicked on or searched.

### Thanks

Thanks to xyz for the data....
