using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using System;
using System.Web;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using tovuti_client.Models;
using System.Web.Http;
using System.Net;

namespace tovuti_client.Pages
{
    public class LandingModel : PageModel
    {
        private readonly ILogger<LandingModel> _logger;
        private readonly string Baseurl = "http://localhost:7385/tovuti.svc/";
        public LandingModel(ILogger<LandingModel> logger)
        {
            _logger = logger;
        }

        public void OnGet()
        { 
        
        }

        // public Response SaveProduct(string pname,string createdby,bool hasattr,int cid)
        //{
        //    try {
        //        using (var client = new HttpClient())
        //        {
        //            client.BaseAddress = new Uri(Baseurl);
        //            client.DefaultRequestHeaders.Clear();
        //            //Define request data format
        //            client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
        //            //var response = client.GetAsync($"localhost:44322/api/User/user/{userId}{userId}");
        //            HttpContent httpContent = new StringContent("");
        //            var Res = client.PostAsync(client.BaseAddress + "products", httpContent);
        //            var body = Res.Result.Content.ReadAsAsync<Response>().Result;
        //            return body;
        //        }
        //    } catch (Exception Ex) 
        //    {
        //        return null;
        //    }
                
        //    }
  

       



        public class ProductData
        {
            public IList<Product> Data { get; set; }
        }

        public IHttpActionResult Get([FromUri] SearchRequest request)
        {
           // var prods = GetProduct();
            var allProducts = JsonConvert.DeserializeObject<ProductData>("");
            var response = new productResponse
            {
                Data = allProducts.Data,
                Draw = request.Draw,
                RecordsFiltered = allProducts.Data.Count,
                RecordsTotal = allProducts.Data.Count
            };
            return Ok(new { CustomErrorMessage = "Put you're message here" });
        }

        private IHttpActionResult Ok(object p)
        {
            throw new NotImplementedException();
        }
    }
}
