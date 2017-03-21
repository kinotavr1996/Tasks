using CRUDTest.Data;
using System;
using System.Linq;

namespace CRUDTest
{
    public class DbInitializer
    {
        public static void Initialize(CrudContext context)
        {
            context.Database.EnsureCreated();
            if (context.Users.Any())
            {
                return;   // DB has been seeded
            }
            var users = new User[]
            {
            new User{FirstMidName="Carson",LastName="Alexander",Phone="+380958908157",UserGendre = Gendre.Male,Country="Ukraine"},
            new User{FirstMidName="Meredith",LastName="Alonso",Phone="+380958908157",UserGendre = Gendre.Female,Country="USA"},
            new User{FirstMidName="Arturo",LastName="Anand",Phone="+380958908157",UserGendre = Gendre.Male,Country="France"},
            new User{FirstMidName="Gytis",LastName="Barzdukas",Phone="+380958908157",UserGendre = Gendre.Female,Country="Great Britain"},
            new User{FirstMidName="Yan",LastName="Li",Phone="+380958908157",UserGendre = Gendre.Female,Country="Russia"},
            new User{FirstMidName="Peggy",LastName="Justice",Phone="+380958908157",UserGendre = Gendre.Male,Country="OAE"},
            new User{FirstMidName="Laura",LastName="Norman",Phone="+380958908157",UserGendre = Gendre.Male,Country="Israel"},
            new User{FirstMidName="Nino",LastName="Olivetto",Phone="+380958908157",UserGendre = Gendre.Female,Country="Ukraine"}
            };
            foreach (User u in users)
            {
                context.Users.Add(u);
            }
            context.SaveChanges();
        }
    }
}
