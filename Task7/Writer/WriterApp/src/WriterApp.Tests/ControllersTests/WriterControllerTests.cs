using Xunit;
using WriterApp.Web.ViewModel;
using WriterApp.Repository;
using Microsoft.AspNetCore.Mvc;
using Moq;
using WriterApp.Web.Controllers;
using WriterApp.Data.Model;
using System.Collections.Generic;
using System;
using System.Linq;
using WriterApp.Data.Common.Pagination;

namespace WriterApp.Tests.ControllersTests
{
    public class WriterControllerTests
    {
        [Fact]
        public void StartCreatePage_ReturnAViewResult()
        {
            var mock = new Mock<IWriterRepository>();
            var controller = new HomeController(mock.Object);

            Assert.NotNull(controller.Create());
            Assert.IsNotType<RedirectToActionResult>(controller.Create());
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

        [Fact]
        public void StartHomePage_ReturnsAViewResult()
        {
            var mock = new Mock<IWriterRepository>();
            var controller = new HomeController(mock.Object);
            var myset = new List<Writer>();
            foreach (var w in InitWritersList())
            {
                myset.Add(w);
            }

            mock.Setup(x => x.GetPage(1, 4, It.IsAny<Func<IQueryable<Writer>, IQueryable<Writer>>>()))
                .Returns<int, int, Func<IQueryable<Writer>, IQueryable<Writer>>>((page, pageSize, filter) => new PagedList<Writer>(filter(myset.AsQueryable()), page, pageSize));

            var result_1 = (ViewResult)controller.Index(null, null, null, null, null).Result;
            var result_1_Model = (WriterListViewModel)result_1.Model;

            var result_2 = (ViewResult)controller.Index("lastName", "DESC", "Ol", null, 1).Result;
            var result_2_Model = (WriterListViewModel)result_2.Model;

            var result_3 = (ViewResult)controller.Index("Qwerty", "ASC", null, "eg", 100).Result;
            var result_3_Model = (WriterListViewModel)result_3.Model;

            Assert.NotNull(result_1);
            Assert.IsNotType<RedirectToActionResult>(result_1);
            Assert.Equal(4, result_1_Model.Items.Count);
            Assert.Equal("Gaevskiy Oleg", result_1_Model.Items[0].FullName);
            Assert.Equal("Ivanov Ivan", result_1_Model.Items[1].FullName);

            Assert.NotNull(result_2);
            Assert.IsNotType<RedirectToActionResult>(result_2);
            Assert.Equal(3, result_2_Model.Items.Count);
            Assert.Equal("Ololo Loloshovich", result_2_Model.Items[0].FullName);
            Assert.Equal("Makedonsky Oleksandr", result_2_Model.Items[1].FullName);

            Assert.NotNull(result_3);
            Assert.IsNotType<RedirectToActionResult>(result_3);
            Assert.Equal(1, result_3_Model.Items.Count);

            mock.Verify(m => m.GetPage(1, 4, It.IsAny<Func<IQueryable<Writer>, IQueryable<Writer>>>()), Times.Exactly(2));
        }

        [Fact]
        public void AddWriter_ReturnsAViewResult_WithWriterModel()
        {
            var mockRepo = new Mock<IWriterRepository>();
            var validator = new DeepDiveValidator();

            HomeController controller = new HomeController(mockRepo.Object);
            controller.ModelState.AddModelError("FirstName", "First name is required");

            WriterCreateModel model = new WriterCreateModel { };
            var errorListForModel = validator.Validate(model);
            Assert.Equal(2, errorListForModel.Count);
            Assert.Equal("The FirstName field is required.", errorListForModel[0].ErrorMessage);
            Assert.Equal("The LastName field is required.", errorListForModel[1].ErrorMessage);
            var result = controller.Create(model);
            Assert.NotNull(result);
            Assert.IsNotType<RedirectToActionResult>(result);

            var modelWithLongName = new WriterCreateModel()
            {
                FirstName = "OlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOleg",
                LastName = "OlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOleOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOleggOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOleg",
                DateOfBirth = new DateTime(1996, 5, 2),
                Biography = "Work in ArtyGeek"
            };
            var errorListForModelWithLongName = validator.Validate(modelWithLongName);
            var resultForModelWithLongFirstName = controller.Create(modelWithLongName);
            Assert.NotNull(result);
            Assert.IsNotType<RedirectToActionResult>(result);
            Assert.Equal("The field FirstName must be a string with a maximum length of 256.", errorListForModelWithLongName[0].ErrorMessage);
            Assert.Equal("The field LastName must be a string with a maximum length of 256.", errorListForModelWithLongName[1].ErrorMessage);
        }

        [Fact]
        public void AddWriter_ReturnsARedirect_AndAddsWriter()
        {
            var mock = new Mock<IWriterRepository>();
            var controller = new HomeController(mock.Object);
            var validator = new DeepDiveValidator();
            var writer = new Writer { };
            mock.Setup(m => m.Add(It.IsAny<Writer>()));
            var model = new WriterCreateModel()
            {
                FirstName = "Oleg",
                LastName = "Gaevskiy",
                DateOfBirth = new DateTime(1996, 5, 2),
                Biography = "Work in ArtyGeek"
            };
            var result = controller.Create(model);
            var redirectToActionResult = Assert.IsType<RedirectToActionResult>(result.Result);
            Assert.Null(redirectToActionResult.ControllerName);
            Assert.Equal("Index", redirectToActionResult.ActionName);
            mock.Verify(m => m.Add(It.IsAny<Writer>()), Times.Once);
        }
        [Fact]
        public void EditWriter_ReturnsAViewResult_WithWriterEditModel()
        {
            var mockRepo = new Mock<IWriterRepository>();
            var validator = new DeepDiveValidator();
            var writer = new Writer { Id = 1 };
            mockRepo.Setup(x => x.GetById(writer.Id)).Returns(writer);
            mockRepo.Setup(x => x.Edit(It.IsAny<Writer>()));
            HomeController controller = new HomeController(mockRepo.Object);
            var editModel = new WriterEditModel()
            {
                Id = 1,
                FirstName = " ",
                LastName = " ",
                DateOfBirth = new DateTime(1997, 6, 3),
                Biography = "Work in ArtyGeek Forever"
            };
            var errorListForModel = validator.Validate(editModel);
            Assert.Equal(2, errorListForModel.Count);
            Assert.Equal("The FirstName field is required.", errorListForModel[0].ErrorMessage);
            Assert.Equal("The LastName field is required.", errorListForModel[1].ErrorMessage);
            var result = controller.Edit(editModel);
            Assert.NotNull(result);
            Assert.IsNotType<RedirectToActionResult>(result);
            var modelWithLongName = new WriterEditModel()
            {
                Id = 1,
                FirstName = "OlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOleg",
                LastName = "OlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOleOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOleggOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOlegOleg",
                DateOfBirth = new DateTime(1996, 5, 2),
                Biography = "Work in ArtyGeek"
            };
            var errorListForModelWithLongName = validator.Validate(modelWithLongName);
            var resultForModelWithLongFirstName = controller.Edit(modelWithLongName);
            Assert.NotNull(result);
            Assert.IsNotType<RedirectToActionResult>(result);
            Assert.Equal("The field FirstName must be a string with a maximum length of 256.", errorListForModelWithLongName[0].ErrorMessage);
            Assert.Equal("The field LastName must be a string with a maximum length of 256.", errorListForModelWithLongName[1].ErrorMessage);

            var modelWithNotExistId = new WriterEditModel()
            {
                Id = 100500,
                FirstName = "Gaevskiy",
                LastName = "Oleg",
                DateOfBirth = new System.DateTime(1997, 6, 3),
                Biography = "Work in ArtyGeek Forever"
            };
            var resultForModelWithNotExistId = controller.Edit(modelWithNotExistId);
            Assert.NotNull(result);
            Assert.IsNotType<RedirectToActionResult>(result);

            mockRepo.Verify(m => m.Edit(It.IsAny<Writer>()), Times.Exactly(2));
        }

        [Fact]
        public void EditWriter_ReturnsARedirect_AndEditsWriter()
        {
            var mock = new Mock<IWriterRepository>();
            var writer = new Writer { Id = 1 };
            mock.Setup(x => x.GetById(writer.Id)).Returns(writer);
            var controller = new HomeController(mock.Object);
            var editModel = new WriterEditModel()
            {
                Id = 1,
                FirstName = "Gaevskiy",
                LastName = "Oleg",
                DateOfBirth = new DateTime(1997, 6, 3),
                Biography = "Work in ArtyGeek Forever"
            };
            var result = controller.Edit(editModel);
            var redirectToActionResult = Assert.IsType<RedirectToActionResult>(result.Result);
            Assert.Null(redirectToActionResult.ControllerName);
            Assert.Equal("Index", redirectToActionResult.ActionName);
            mock.Verify(m => m.GetById(writer.Id), Times.Once);
        }

        [Fact]
        public void DeleteWriter_ReturnsARedirect_AndDeleteWriter()
        {
            var mock = new Mock<IWriterRepository>();
            var controller = new HomeController(mock.Object);
            mock.Setup(m => m.Delete(It.IsAny<int>()));
            var result = controller.Delete(1);
            var redirectToActionResult = Assert.IsType<RedirectToActionResult>(result.Result);
            Assert.Null(redirectToActionResult.ControllerName);
            Assert.Equal("Index", redirectToActionResult.ActionName);
            mock.Verify(m => m.Delete(It.IsAny<int>()), Times.Once);
        }
    }
}
