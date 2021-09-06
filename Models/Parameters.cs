using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;

namespace tovuti_client.Models
{
    public class Parameters
    {
    }

    public class SearchRequest
    {
        public int Draw { get; set; }
    }

    public abstract class SearchDetail
    {
    }

    public abstract class SearchResponse<T> where T : SearchDetail
    {
        public int Draw { get; set; }

        public int RecordsTotal { get; set; }

        public int RecordsFiltered { get; set; }

        public IList<T> Data { get; set; }
    }


    public class UserParameters
    {
        public string Password { get; set; }
        public string username { get; set; }
    }

 
    public class Category
    {
        public int cid { get; set; }
        public string cname { get; set; }
        public string created_by { get; set; }
        public string modified_by { get; set; }
    }

    public class Response
    {
        public string ResponseDetails;

        public int ResponseCode;
    }


    public class ProductsResp {

        public List<Product> Products;
    }
    public class Product : SearchDetail
    {
        public int pid { get; set; }
        public int attr_id { get; set; }
        public int uid { get; set; }
        public string pname { get; set; }
        public string cid { get; set; }
        public string created_by { get; set; }
        public string modified_by { get; set; }
        public string color { get; set; }
        public decimal price { get; set; }
        public string size { get; set; }
        public string gender { get; set; }
        public string cname { get; set; }
        public bool has_attr { get; set; }

    }

    public class productResponse : SearchResponse<Product>
    {

    }
    public class Attributes
    {
        public int attr_id { get; set; }
        public int pid { get; set; }
        public string pname { get; set; }
        public string color { get; set; }
        public string size { get; set; }
        public string created_by { get; set; }
        public string modified_by { get; set; }    
        public string gender { get; set; }
        public decimal price { get; set; }
    }

}