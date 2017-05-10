using System.Collections.Generic; 
using WriterApp.Model;

namespace WriterApp.Repository
{
    public interface IWriterRepository : IRepository <Writer>
    {
        Writer GetById(int id);
    }
}
