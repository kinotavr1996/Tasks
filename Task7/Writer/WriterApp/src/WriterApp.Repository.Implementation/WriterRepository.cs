using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using WriterApp.Data.Common.Pagination;
using WriterApp.Data.Context;
using WriterApp.Data.Model;

namespace WriterApp.Repository.Implementation
{
    public class WriterRepository : RepositoryBase<Writer>, IWriterRepository
    {

        public WriterRepository(WriterContext context) : base(context)
        {
        }
        public Writer GetById(int id)
        {
            return Find().AsNoTracking().FirstOrDefault(x => x.Id == id);
        }
        public override IPagedList<Writer> GetPage(int page = 1, int pageSize = 20, Func<IQueryable<Writer>, IQueryable<Writer>> filter = null)
        {
            return base.GetPage(page, pageSize, (query) => (filter != null ? filter(query) : query));
        }

        private object SortBy(string sortOrder, WriterReport writer)
        {
            switch (sortOrder)
            {
                case "FullName":
                    return writer.FullName;
                case "NumberOfBooks":
                    return writer.NumberOfBooks;
                default:
                    return writer.FullName;
            }
        }
        public IPagedList<WriterReport> GetReportsPage(string sortOrder, string direction, string searchString, int page = 1, int pageSize = 20)
        {
            var context = GetContext();
            int _page = page - 1;
            var bookQuery = from wb in context.WriterBooks
                            join b in context.Books on wb.BookId equals b.Id
                            group b by wb.WriterId into g
                            select new
                            {
                                WriterId = g.Key,
                                MaxDate = g.Max(x => x.PublishedDate).Year,
                                MinDate = g.Min(x => x.PublishedDate).Year,
                                Count = g.Count()
                            };

            var writerBookQuery = from w in context.Writers
                                  join b in bookQuery on w.Id equals b.WriterId into pb
                                  from p in pb.DefaultIfEmpty()
                                  select new WriterReport
                                  {
                                      Id = w.Id,
                                      FullName = w.LastName + " " + w.FirstName,
                                      NumberOfBooks = p == null ? 0 : p.Count,
                                      FirstBook = p == null ? (int?)null : p.MinDate,
                                      LastBook = p == null ? (int?)null : p.MaxDate
                                  };

            if (!string.IsNullOrEmpty(searchString))
            {
                writerBookQuery = from w in writerBookQuery
                                  where w.FullName.ToUpper().Contains(searchString.ToUpper())
                                  select w;
            }

            if (direction == "ASC")
            {
                writerBookQuery = from w in writerBookQuery
                                   orderby SortBy(sortOrder, w) ascending
                                   select w;
            }
            else
            {
                writerBookQuery = from w in writerBookQuery
                                  orderby SortBy(sortOrder, w) descending
                                  select w;
            }
            PagedList<WriterReport> writerReposts = new PagedList<WriterReport>(writerBookQuery.Count(), _page, pageSize);
            writerBookQuery = writerBookQuery.Skip(_page * pageSize).Take(pageSize);
            foreach (var item in writerBookQuery.ToList())
            {
                writerReposts.Add(new WriterReport { Id = item.Id, FirstBook = item.FirstBook, LastBook = item.LastBook, NumberOfBooks = item.NumberOfBooks, FullName = item.FullName });
            }
            return writerReposts;
        }
        public override void Delete(int id)
        {
            var writer = Find().SingleOrDefault(x => x.Id == id);
            Remove(writer);
        }
        public override void Edit(Writer writer)
        {
            var _writer = Find().SingleOrDefault(x => x.Id == writer.Id);
            _writer.FirstName = writer.FirstName;
            _writer.LastName = writer.LastName;
            _writer.DateOfBirth = writer.DateOfBirth;
            _writer.Biography = writer.Biography;
            SaveChanges();
        }
    }
}
