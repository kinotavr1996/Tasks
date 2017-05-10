using Microsoft.EntityFrameworkCore;
using System.Linq;
using WriterApp.Data.Context;
using WriterApp.Data.Model;

namespace WriterApp.Repository.Implementation
{
    public class BookRepository : RepositoryBase<Book>, IBookRepository
    {
        public BookRepository(WriterContext context) : base(context)
        {
        }
        public Book GetById(int id)
        {
            return Find().AsNoTracking().FirstOrDefault(x => x.Id == id);
        }
        public override void Delete(int id)
        {
            var book = Find().SingleOrDefault(x => x.Id == id);
            Remove(book);
        }
        public override void Edit(Book book)
        {
            var _book = Find().SingleOrDefault(x => x.Id == book.Id);
            _book.Caption = book.Caption;
            _book.PublishedDate = book.PublishedDate;
            SaveChanges();
        }
    }
}
