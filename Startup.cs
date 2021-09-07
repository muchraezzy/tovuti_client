using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace tovuti_client
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddRazorPages();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            DefaultFilesOptions DefaultFile = new DefaultFilesOptions();
            DefaultFile.DefaultFileNames.Clear();
            DefaultFile.DefaultFileNames.Add("Landing.html");
            app.UseDefaultFiles(DefaultFile);
            //app.UseStaticFiles();

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseStaticFiles();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapRazorPages();
                endpoints.MapControllers();
                endpoints.MapControllerRoute(name: "SaveProd",
                pattern: "Products/SaveProduct/{pname}/{createdby}/{hasattr}/{cid}",
                defaults: new { controller = "Products", action = "SaveProduct" });

                endpoints.MapControllerRoute(name: "EditProd",
                pattern: "Products/UpdateProduct/{pname}/{createdby}/{hasattr}/{cid}/{pid}",
                defaults: new { controller = "Products", action = "UpdateProduct" });

                endpoints.MapControllerRoute(name: "DeleteProd",
               pattern: "Products/DeleteProduct/{pid}/{cid}/{attr_id}",
               defaults: new { controller = "Products", action = "DeleteProduct" });

                endpoints.MapControllerRoute(name: "SaveCat",
                pattern: "Products/SaveCategory/{cname}/{createdby}/{cid}/{paction}",
                defaults: new { controller = "Products", action = "SaveCategory" });

                endpoints.MapControllerRoute(name: "SaveAttr",
                pattern: "Products/SaveAttribute/{pid}/{createdby}/{color}/{size}/{gender}/{price}/{paction}",
                defaults: new { controller = "Products", action = "SaveAttribute" });

                endpoints.MapControllerRoute(name: "default",
                            pattern: "{controller=Home}/{action=Index}/{id?}");
            });
        }
    }
}
