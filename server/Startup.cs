using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

namespace server
{
  public class CityInformation
  {
    public string CityName { get; set; }
    public decimal Latitude { get; set; }
    public decimal Longitude { get; set; }
  }

  public class Startup
  {
    // This method gets called by the runtime. Use this method to add services to the container.
    // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
    public void ConfigureServices(IServiceCollection services)
    {
      services.AddCors(options =>
      {
        options.AddPolicy("dev", builder =>
        {
          builder.AllowAnyHeader();
          builder.AllowAnyMethod();
          builder.AllowAnyOrigin();
        });
      });
    }

    private CityInformation[] CITY_LIST = {
      new CityInformation() { CityName = "Istanbul", Latitude = 41.015137M, Longitude = 28.979530M },
      new CityInformation() { CityName = "Ankara", Latitude = 39.925533M, Longitude = 32.866287M },
      new CityInformation() { CityName = "Izmir", Latitude = 38.423733M, Longitude = 27.142826M },
      new CityInformation() { CityName = "Adana", Latitude = 37.000000M, Longitude = 35.321335M },
      new CityInformation() { CityName = "Gaziantep", Latitude = 37.066666M, Longitude = 37.383331M },
      new CityInformation() { CityName = "Diyarbakir", Latitude = 37.910000M, Longitude = 40.240002M },
      new CityInformation() { CityName = "Izmit", Latitude = 40.766666M, Longitude = 29.916668M },
      new CityInformation() { CityName = "Tekirdag", Latitude = 40.977779M, Longitude = 27.515278M },
    };
  }
    }
