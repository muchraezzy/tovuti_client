using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using tovuti_client.Models;


namespace tovuti_client.Controllers
{
    public class ProductsController : Controller
    {
        string Baseurl = "http://localhost:7385/tovuti.svc/";

        public IActionResult Index()
        {
            return View();
        }


        [Route("GetProducts")]
        public async Task<string> GetProducts()
        {
            List<Product> products = new List<Product>();
            var prodResponse="";
            using (var client = new HttpClient())
            {
                client.BaseAddress = new Uri(Baseurl);
                client.DefaultRequestHeaders.Clear();
                //Define request data format
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                //Sending request to find web api REST service resource GetAllEmployees using HttpClient
                HttpResponseMessage Res = await client.GetAsync(client.BaseAddress + "products").ConfigureAwait(false);
                //Checking the response is successful or not which is sent using HttpClient
                Res.EnsureSuccessStatusCode();

                if (Res.IsSuccessStatusCode)
                {
                    //Storing the response details recieved from web api
                    prodResponse =await Res.Content.ReadAsStringAsync();
                    //Deserializing the response recieved from web api and storing into the Employee list
                    //products = JsonConvert.DeserializeObject<List<Product>>(prodResponse);
                }
            }


            return prodResponse;
        }

        [Route("GetCategories")]
        public async Task<string> GetCategories()
        {
            List<Category> categories = new List<Category>();
            var catResponse = "";
            using (var client = new HttpClient())
            {
                client.BaseAddress = new Uri(Baseurl);
                client.DefaultRequestHeaders.Clear();
                //Define request data format
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                //Sending request to find web api REST service resource GetAllEmployees using HttpClient
                HttpResponseMessage Res = await client.GetAsync(client.BaseAddress + "productCategories").ConfigureAwait(false);
                //Checking the response is successful or not which is sent using HttpClient
                Res.EnsureSuccessStatusCode();

                if (Res.IsSuccessStatusCode)
                {
                    //Storing the response details recieved from web api
                    catResponse = await Res.Content.ReadAsStringAsync();
                    //Deserializing the response recieved from web api and storing into the Employee list
                    categories = JsonConvert.DeserializeObject<List<Category>>(catResponse);
                }
            }


            return catResponse;
            ;
        }


        [Route("GetProdAttr")]
        public async Task<string> GetProdAttr()
        {
            List<Attribute>attributes = new List<Attribute>();
            var attrResponse = "";
            using (var client = new HttpClient())
            {
                client.BaseAddress = new Uri(Baseurl);
                client.DefaultRequestHeaders.Clear();
                //Define request data format
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                //Sending request to find web api REST service resource GetAllEmployees using HttpClient
                HttpResponseMessage Res = await client.GetAsync(client.BaseAddress + "productAttributes").ConfigureAwait(false);
                //Checking the response is successful or not which is sent using HttpClient
                Res.EnsureSuccessStatusCode();

                if (Res.IsSuccessStatusCode)
                {
                    //Storing the response details recieved from web api
                    attrResponse = await Res.Content.ReadAsStringAsync();
                    //Deserializing the response recieved from web api and storing into the Employee list
                    //attributes = JsonConvert.DeserializeObject<List<Attribute>>(attrResponse);
                }
            }


            return attrResponse;
            ;
        }

        [HttpPost]
        public Response DeleteProduct(int pid, int cid, bool hasattr)
        {
            return null;
        }

        [HttpPost]
        public Response UpdateProduct(string pname, string createdby, bool hasattr, int cid, int pid)
        {
            try
            {
                Product product = new Product();
                product.pid = pid;
                product.pname = pname;
                product.modified_by = createdby;
                product.has_attr = hasattr;
                product.cid = cid.ToString();

                using (var client = new HttpClient())
                {
                    client.BaseAddress = new Uri(Baseurl);
                    client.DefaultRequestHeaders.Clear();
                    //Define request data format
                    client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                    //var response = client.GetAsync($"localhost:44322/api/User/user/{userId}{userId}");
                    // HttpContent httpContent = new StringContent(product);
                    var json = JsonConvert.SerializeObject(product);
                    var data = new StringContent(json, Encoding.UTF8, "application/json");
                    var Res = client.PutAsync(client.BaseAddress + "products", data);
                    var body = Res.Result.Content.ReadAsAsync<Response>().Result;
                    return body;
                }
            }
            catch (Exception Ex)
            {
                return null;
            }
        }


        [HttpPost]
        public Response SaveProduct(string pname, string createdby, bool hasattr, int cid)
        {
            try
            {
                Product product = new Product();
                product.pname = pname;
                product.created_by = createdby;
                product.has_attr = hasattr;
                product.cid = cid.ToString();

                using (var client = new HttpClient())
                {
                    client.BaseAddress = new Uri(Baseurl);
                    client.DefaultRequestHeaders.Clear();
                    //Define request data format
                    client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                    //var response = client.GetAsync($"localhost:44322/api/User/user/{userId}{userId}");
                    // HttpContent httpContent = new StringContent(product);
                    var json = JsonConvert.SerializeObject(product);
                    var data = new StringContent(json, Encoding.UTF8, "application/json");
                    var Res = client.PostAsync(client.BaseAddress + "products", data);
                    var body = Res.Result.Content.ReadAsAsync<Response>().Result;
                    return body;
                }
            }
            catch (Exception Ex)
            {
                return null;
            }

        }


        [HttpPost]
        public Response DeleteCategory(string cname, string createdby, int cid)
        {

            return null;
        }

        [HttpPost]
        public Response EditCategory(string cname, string createdby, int cid)
        {

            return null;
        }

        [HttpPost]
        public Response SaveCategory(string cname, string createdby,int cid, string paction)
        {
            try {
                Category category = new Category();
                category.cname = cname;
                category.created_by = createdby;
                category.cid = cid;

                using (var client = new HttpClient())
                {
                    client.BaseAddress = new Uri(Baseurl);
                    client.DefaultRequestHeaders.Clear();
                    //Define request data format
                    client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                    //var response = client.GetAsync($"localhost:44322/api/User/user/{userId}{userId}");
                    // HttpContent httpContent = new StringContent(product);
                    var json = JsonConvert.SerializeObject(category);
                    var data = new StringContent(json, Encoding.UTF8, "application/json");

                    if (paction == "Save")
                    {
                        var Res = client.PostAsync(client.BaseAddress + "productCategory", data);
                        var body = Res.Result.Content.ReadAsAsync<Response>().Result;
                        return body;
                    }
                    else
                    {
                        var Res = client.PostAsync(client.BaseAddress + "productCategory", data);
                        var body = Res.Result.Content.ReadAsAsync<Response>().Result;
                        return body;
                    }

                }

            } catch (Exception Ex) 
            {
                return null;
            }
        }

        [HttpPost]
        public Response SaveAttribute(int pid, string createdby, string color, string size, string gender, int price, string paction)
        {
            try
            {
                Attributes attribute = new Attributes();
                if (paction == "Save")
                {
                    attribute.pid = pid;
                }
                else {
                    attribute.attr_id = pid;
                }
                
                attribute.created_by = createdby;
                attribute.color = color;
                attribute.size = size;
                attribute.gender = gender;
                attribute.price = price;


                using (var client = new HttpClient())
                {
                    client.BaseAddress = new Uri(Baseurl);
                    client.DefaultRequestHeaders.Clear();
                    //Define request data format
                    client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                    //var response = client.GetAsync($"localhost:44322/api/User/user/{userId}{userId}");
                    // HttpContent httpContent = new StringContent(product);
                    var json = JsonConvert.SerializeObject(attribute);
                    var data = new StringContent(json, Encoding.UTF8, "application/json");

                    if (paction == "Save")
                    {
                        var Res = client.PostAsync(client.BaseAddress + "productAttributes", data);
                        var body = Res.Result.Content.ReadAsAsync<Response>().Result;
                        return body;
                    } else 
                    {
                        var Res = client.PostAsync(client.BaseAddress + "UpdateproductAttributes", data);
                        var body = Res.Result.Content.ReadAsAsync<Response>().Result;
                        return body;
                    }
                    
                    
                }

            }
            catch (Exception Ex)
            {
                return null;
            }
        }


        public List<Product> ____GetProducts()
        {
            List<Product> products = new List<Product>();

            try
            {
                using (var client = new HttpClient())
                {
                    client.BaseAddress = new Uri(Baseurl);
                    client.DefaultRequestHeaders.Clear();
                    //Define request data format
                    client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                    //Sending request to find web api REST service resource GetAllEmployees using HttpClient
                    var Res = client.GetAsync(client.BaseAddress + "products");
                    //Checking the response is successful or not which is sent using HttpClient

                    //var Responseee = Res.Result.Content.ReadAsAsync<ProductsResp>().Result;
                    //ProductsResp response = JsonConvert.DeserializeObject<ProductsResp>(Res.ToString());

                    //byte[] docBytes = File.ReadAllBytes(filePath);

                    //string jsonString = Encoding.UTF32.GetString(docBytes);

                    //products = JsonConvert.DeserializeObject<dynamic>(Res.ToString());
                  
                    //foreach (Product body in response)
                    //{
                        
                    //    Product prod = new Product
                    //    {
                    //        pid = body.pid,
                    //        modified_by = body.modified_by,
                    //        created_by = body.created_by,
                    //        pname = body.pname,
                    //        cid = body.cid,
                    //        uid = body.uid,
                    //        has_attr = body.has_attr,
                    //        cname = body.cname,
                    //        color = body.color,
                    //        size = body.size,
                    //        attr_id = body.attr_id,
                    //        price = body.price
                    //    };
                    //    products.Add(prod);
                    //}
                }
            }
            catch (Exception Ex) { 
            
            }

            return products;
        }


    }
}
