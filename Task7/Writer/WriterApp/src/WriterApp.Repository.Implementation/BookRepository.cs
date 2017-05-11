using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;
using WriterApp.Data.Common.Pagination;
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
            return Find().Include("WriterBooks.Writer").AsNoTracking().FirstOrDefault(x => x.Id == id);
        }
        public override void Delete(int id)
        {
            var book = Find().SingleOrDefault(x => x.Id == id);
            Remove(book);
        }
        public override IPagedList<Book> GetPage(int page = 1, int pageSize = 20, Func<IQueryable<Book>, IQueryable<Book>> filter = null)
        {
            return new PagedList<Book>(Find(filter).Include("WriterBooks.Writer").AsNoTracking(), page, pageSize);
        }
        public override void Edit(Book book)
        {
            var _book = Find().Include("WriterBooks.Writer").SingleOrDefault(x => x.Id == book.Id);
            _book.Caption = book.Caption;
            _book.PublishedDate = book.PublishedDate;
            _book.WriterBooks.Clear();
            SaveChanges();
            foreach (var wb in book.WriterBooks)
            {
                _book.WriterBooks.Add(new WriterBook { BookId = book.Id, WriterId = wb.WriterId });
            }
            SaveChanges();
        }
    }
}
