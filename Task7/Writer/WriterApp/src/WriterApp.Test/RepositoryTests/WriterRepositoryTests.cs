using Microsoft.EntityFrameworkCore;
using WriterApp.Data.Context;
using Xunit;
using System.Linq;
using WriterApp.Repository.Implementation;
using WriterApp.Data.Model;
using System;
using System.Collections.Generic;

namespace WriterApp.Tests
{
    public class WriterRepositoryTests
    {
        [Fact]
        public void AddWriter()
        {
            var options = new DbContextOptionsBuilder<WriterContext>()
                .UseInMemoryDatabase(databaseName: "AddWriter")
                .Options;

            using (var context = new WriterContext(options))
            {
                var repository = new WriterRepository(context);
                repository.Add(new Writer { LastName = "Gaevskiy", FirstName = "Oleg", DateOfBirth = new DateTime(1,2,3), Biography = "It`s biography" });
            }
            using (var context = new WriterContext(options))
            {
                Assert.Equal(1, context.Writers.Count());
                Assert.Equal("Gaevskiy", context.Writers.Single().LastName);
                Assert.Equal("Oleg", context.Writers.Single().FirstName);
                Assert.Equal("03/02/0001", context.Writers.Single().DateOfBirth.Date.ToString("dd/MM/yyyy"));
                Assert.Equal("It`s biography", context.Writers.Single().Biography);

            }
        }

        [Fact]
        public void GetWriterById()
        {
            var options = new DbContextOptionsBuilder<WriterContext>()
                .UseInMemoryDatabase(databaseName: "GetWriterById")
                .Options;

            using (var context = new WriterContext(options))
            {
                var repository = new WriterRepository(context);
                repository.Add(new Writer { LastName = "Gaevskiy", FirstName = "Oleg", DateOfBirth = new DateTime(), Biography = "It`s biography" });
                repository.Add(new Writer { LastName = "Oleg", FirstName = "Gaevskiy", DateOfBirth = new DateTime(), Biography = "It`s biography" });
            }
            using (var context = new WriterContext(options))
            {
                Assert.Equal(1, context.Writers.Where(w => w.Id == 1).Count());
            }
        }
        [Fact]
        public void DeleteWriter()
        {
            var options = new DbContextOptionsBuilder<WriterContext>()
                .UseInMemoryDatabase(databaseName: "DeleteWriter")
                .Options; 
            using (var context = new WriterContext(options))
            {
                var repository = new WriterRepository(context);
                repository.Add(new Writer { LastName = "Gaevskiy", FirstName = "Oleg", DateOfBirth = new DateTime(), Biography = "It`s biography" });
                repository.Delete(1);
            }

            using (var context = new WriterContext(options))
            {
                Assert.Equal(0, context.Writers.Count());
            }
        }
        [Fact]
        public void EditWriter()
        {
            var options = new DbContextOptionsBuilder<WriterContext>()
                .UseInMemoryDatabase(databaseName: "EditWriter")
                .Options;
            using (var context = new WriterContext(options))
            {
                var repository = new WriterRepository(context);
                repository.Add(new Writer { LastName = "Gaevskiy", FirstName = "Oleg", DateOfBirth = new DateTime().Date, Biography = "It`s biography" });
                repository.Edit(new Writer { Id = 1, LastName = "Oleg", FirstName = "Gaevskiy", DateOfBirth = new DateTime(1,2,3), Biography = "It`s new biography" });
            } 
            using (var context = new WriterContext(options))
            {
                Assert.Equal("Gaevskiy", context.Writers.Single().FirstName);
                Assert.Equal("Oleg", context.Writers.Single().LastName);
                Assert.Equal("03/02/0001", context.Writers.Single().DateOfBirth.Date.ToString("dd/MM/yyyy"));
                Assert.Equal("It`s new biography", context.Writers.Single().Biography);


            }
        }
        public List<Writer> InitWritersList()
        {
            List<Writer> writerList = new List<Writer>();
            writerList.Add(new Writer { LastName = "Gaevskiy", FirstName = "Oleg", DateOfBirth = new DateTime().Date, Biography = "It`s biography" });
            writerList.Add(new Writer { LastName = "Ivanov", FirstName = "Ivan", DateOfBirth = new DateTime().Date, Biography = "It`s biography" });
            writerList.Add(new Writer { LastName = "Mahov", FirstName = "Sergiy", DateOfBirth = new DateTime().Date, Biography = "It`s biography" });
            writerList.Add(new Writer { LastName = "Ololo", FirstName = "Loloshovich", DateOfBirth = new DateTime().Date, Biography = "It`s biography" });
            writerList.Add(new Writer { LastName = "Petrovich", FirstName = "Petro", DateOfBirth = new DateTime().Date, Biography = "It`s biography" });
            writerList.Add(new Writer { LastName = "Makedonsky", FirstName = "Oleksandr", DateOfBirth = new DateTime().Date, Biography = "It`s biography" });
            return writerList;
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
        public void GetWritersWithParametrs()
        {
            var options = new DbContextOptionsBuilder<WriterContext>()
                .UseInMemoryDatabase(databaseName: "GetWritersWithParametrs")
                .Options;

            using (var context = new WriterContext(options))
            {
                var repository = new WriterRepository(context);
                foreach (var w in InitWritersList())
                {
                    repository.Add(w);
                }
                Assert.Equal(5, repository.GetPage(1, 5, (query) => query).Count());
                Assert.Equal(5, repository.GetPage(0, 5, (query) => query).Count());
                Assert.Equal(repository.Get().Count(), repository.GetPage(0, 100, (query) => query).Count());
                Assert.Equal(repository.Get().Count(), repository.GetPage().Count());
                Assert.Equal(0, repository.GetPage(100,0).Count());
                Assert.Equal(0, repository.GetPage(100).Count()); 
            }
        }
        public List<WriterBook> InitWriterBookList()
        {
            List<WriterBook> writerList = new List<WriterBook>();
            writerList.Add(new WriterBook { WriterId = 1, BookId = 1 });
            writerList.Add(new WriterBook { WriterId = 2, BookId = 1 });
            writerList.Add(new WriterBook { WriterId = 3, BookId = 1 });
            writerList.Add(new WriterBook { WriterId = 1, BookId = 2 });
            writerList.Add(new WriterBook { WriterId = 2, BookId = 2 });
            writerList.Add(new WriterBook { WriterId = 3, BookId = 2 });
            return writerList;
        }
        [Fact]
        public void GetReportPage()
        {
            var options = new DbContextOptionsBuilder<WriterContext>()
                .UseInMemoryDatabase(databaseName: "GetReportPage")
                .Options;
            using (var context = new WriterContext(options))
            {

                var wRepository = new WriterRepository(context);
                var bRepository = new BookRepository(context);

                foreach (var w in InitWritersList())
                {
                    wRepository.Add(w);
                }
                foreach (var b in InitBooksList())
                {
                    bRepository.Add(b);
                }
                foreach(var wb in InitWriterBookList())
                {
                    context.WriterBooks.Add(wb);
                }
                
                context.SaveChanges();

                Assert.Equal(6, wRepository.GetReportsPage().Count());
                Assert.Equal(5, wRepository.GetReportsPage(1, 5).Count());
                Assert.Equal(5, wRepository.GetReportsPage(0, 5).Count());
                Assert.Equal(6, wRepository.GetReportsPage(0, 100).Count());
                Assert.Equal(6, wRepository.GetReportsPage().Count());
                Assert.Equal(0, wRepository.GetReportsPage(100, 0).Count());
                Assert.Equal(0, wRepository.GetReportsPage(100).Count());
                Assert.Equal(2, wRepository.GetById(1).WriterBooks.Count());
                Assert.NotEqual(3, wRepository.GetById(2).WriterBooks.Count());

            }
        }
    }
}
