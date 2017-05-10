using System.Collections.Generic; 
using WriterApp.Model;

namespace WriterApp.Repository
{
    public interface IWriterRepository : IRepository <Writer>
    {
        Writer GetById(int id);
        PagedList<Writer> GetWritersWithParameters(int pageSize, string filter, string direction, string sortBy = "ASC", int page = 1);
    }
}
