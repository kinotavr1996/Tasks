using Microsoft.EntityFrameworkCore;
using Xunit;
using System.Linq;
using System;
using System.Collections.Generic;
using WriterApp.Repository.Implementation;
using WriterApp.Data.Context;
using WriterApp.Data.Model;

namespace BookApp.Tests
{
    public class BookRepositoryTests
    {
        [Fact]
        public void AddBook()
        {
            var options = new DbContextOptionsBuilder<WriterContext>()
                .UseInMemoryDatabase(databaseName: "AddBook")
                .Options;
            using (var context = new WriterContext(options))
            {
                var repository = new BookRepository(context);
                repository.Add(new Book { Caption = "Piece and War", PublishedDate = new DateTime(1, 2, 3) });
            }
            using (var context = new WriterContext(options))
            {
                Assert.Equal(1, context.Books.Count());
                Assert.Equal("Piece and War", context.Books.Single().Caption);
                Assert.Equal("03/02/0001", context.Books.Single().PublishedDate.Date.ToString("dd/MM/yyyy"));
            }
        }

        [Fact]
        public void GetBookById()
        {
            var options = new DbContextOptionsBuilder<WriterContext>()
                .UseInMemoryDatabase(databaseName: "GetBookById")
                .Options;

            using (var context = new WriterContext(options))
            {
                var repository = new BookRepository(context);
                repository.Add(new Book { Caption = "Mahov", PublishedDate = new DateTime().Date });
                repository.Add(new Book { Caption = "Mahov", PublishedDate = new DateTime(1185, 2, 3) });
            }
            using (var context = new WriterContext(options))
            {
                Assert.Equal(1, context.Books.Where(w => w.Id == 1).Count());
            }
        }
        [Fact]
        public void DeleteBook()
        {
            var options = new DbContextOptionsBuilder<WriterContext>()
                .UseInMemoryDatabase(databaseName: "DeleteBook")
                .Options;
            using (var context = new WriterContext(options))
            {
                var repository = new BookRepository(context);
                repository.Add(new Book { Caption = "Mahov", PublishedDate = new DateTime().Date });
                repository.Delete(1);
            }
            using (var context = new WriterContext(options))
            {
                Assert.Equal(0, context.Books.Count());
            }
        }
        [Fact]
        public void EditBook()
        {
            var options = new DbContextOptionsBuilder<WriterContext>()
                .UseInMemoryDatabase(databaseName: "EditBook")
                .Options;
            using (var context = new WriterContext(options))
            {
                var repository = new BookRepository(context);
                repository.Add(new Book { Caption = "Gaevskiy", PublishedDate = new DateTime().Date });
                repository.Edit(new Book { Id = 1, Caption = "Mahov", PublishedDate = new DateTime(1, 2, 3) });
            }
            using (var context = new WriterContext(options))
            {
                Assert.Equal("Mahov", context.Books.Single().Caption);
                Assert.Equal("03/02/0001", context.Books.Single().PublishedDate.Date.ToString("dd/MM/yyyy"));
            }
        }
        public List<Book> InitBooksList()
        {
            List<Book> writerList = new List<Book>();
            writerList.Add(new Book { Caption = "Gaevskiy", PublishedDate = new DateTime().Date });
            writerList.Add(new Book { Caption = "Ivanov", PublishedDate = new DateTime().Date });
            writerList.Add(new Book { Caption = "Mahov", PublishedDate = new DateTime().Date });
            writerList.Add(new Book { Caption = "Ololo", PublishedDate = new DateTime().Date });
            writerList.Add(new Book { Caption = "Petrovich", PublishedDate = new DateTime().Date });
            writerList.Add(new Book { Caption = "Makedonsky", PublishedDate = new DateTime().Date });
            return writerList;
        }
        [Fact]
        public void GetBooksWithParametrs()
        {
            var options = new DbContextOptionsBuilder<WriterContext>()
                .UseInMemoryDatabase(databaseName: "GetBooksWithParametrs")
                .Options;

            using (var context = new WriterContext(options))
            {
                var repository = new BookRepository(context);
                foreach (var w in InitBooksList())
                {
                    repository.Add(w);
                }
                Assert.Equal(5, repository.GetPage(1, 5, (query) => query).Count());
                Assert.Equal(5, repository.GetPage(0, 5, (query) => query).Count());
                Assert.Equal(repository.Get().Count(), repository.GetPage(0, 100, (query) => query).Count());
                Assert.Equal(repository.Get().Count(), repository.GetPage().Count());
                Assert.Equal(0, repository.GetPage(100, 0).Count());
                Assert.Equal(0, repository.GetPage(100).Count());
            }

        }
    }
}
