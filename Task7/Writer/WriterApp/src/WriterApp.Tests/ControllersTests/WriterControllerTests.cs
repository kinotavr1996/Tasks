using Xunit;
using WriterApp.Web.ViewModel;
using WriterApp.Repository;
using Microsoft.AspNetCore.Mvc;
using Moq;
using WriterApp.Web.Controllers;
using WriterApp.Data.Model;

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
        [Fact]
        public void StartHomePage_ReturnsAViewResult()
        {
            var mock = new Mock<IWriterRepository>();
            var controller = new HomeController(mock.Object);

            var result_1 = controller.Index(null,null,null,null,null);
            var result_2 = controller.Index("QWERTY", "Qwerty", "Ol", null, 1);
            var result_3 = controller.Index("QWERTY", "Qwerty", "Ol", "eg", 100);

            Assert.NotNull(result_1);
            Assert.IsNotType<RedirectToActionResult>(result_1);

            Assert.NotNull(result_2);
            Assert.IsNotType<RedirectToActionResult>(result_2);

            Assert.NotNull(result_3);
            Assert.IsNotType<RedirectToActionResult>(result_3);
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
                DateOfBirth = new System.DateTime(1996, 5, 2),
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
            var model = new WriterCreateModel()
            {
                FirstName = "Oleg",
                LastName = "Gaevskiy",
                DateOfBirth = new System.DateTime(1996, 5, 2),
                Biography = "Work in ArtyGeek"
            };
            var result = controller.Create(model);
            var redirectToActionResult = Assert.IsType<RedirectToActionResult>(result.Result);
            Assert.Null(redirectToActionResult.ControllerName);
            Assert.Equal("Index", redirectToActionResult.ActionName);
        }
        [Fact]
        public void EditWriter_ReturnsAViewResult_WithWriterEditModel()
        {
            var mockRepo = new Mock<IWriterRepository>();
            var validator = new DeepDiveValidator();

            HomeController controller = new HomeController(mockRepo.Object);
            var model = new WriterCreateModel()
            {
                FirstName = "Oleg",
                LastName = "Gaevskiy",
                DateOfBirth = new System.DateTime(1996, 5, 2),
                Biography = "Work in ArtyGeek"
            };
            controller.Create(model);

            var editModel = new WriterEditModel()
            {
                Id = 1,
                FirstName = " ",
                LastName = " ",
                DateOfBirth = new System.DateTime(1997, 6, 3),
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
                DateOfBirth = new System.DateTime(1996, 5, 2),
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

        }

        [Fact]
        public void EditWriter_ReturnsARedirect_AndEditsWriter()
        {
            var mock = new Mock<IWriterRepository>();
            var writer = new Writer { Id = 1 };
            mock.Setup(x => x.GetById(writer.Id)).Returns(writer);
            var controller = new HomeController(mock.Object);

            var model = new WriterCreateModel()
            {
                FirstName = "Oleg",
                LastName = "Gaevskiy",
                DateOfBirth = new System.DateTime(1996, 5, 2),
                Biography = "Work in ArtyGeek"
            };
            controller.Create(model);
            var editModel = new WriterEditModel()
            {
                Id = 1,
                FirstName = "Gaevskiy",
                LastName = "Oleg",
                DateOfBirth = new System.DateTime(1997, 6, 3),
                Biography = "Work in ArtyGeek Forever"
            };
            var result = controller.Edit(editModel);
            var redirectToActionResult = Assert.IsType<RedirectToActionResult>(result.Result);
            Assert.Null(redirectToActionResult.ControllerName);
            Assert.Equal("Index", redirectToActionResult.ActionName);
        }

        [Fact]
        public void DeleteWriter_ReturnsARedirect_AndDeleteWriter()
        {
            var mock = new Mock<IWriterRepository>();
            var controller = new HomeController(mock.Object);

            var model = new WriterCreateModel()
            {
                FirstName = "Oleg",
                LastName = "Gaevskiy",
                DateOfBirth = new System.DateTime(1996, 5, 2),
                Biography = "Work in ArtyGeek"
            };
            controller.Create(model);
            var result = controller.Delete(1);
            var redirectToActionResult = Assert.IsType<RedirectToActionResult>(result.Result);
            Assert.Null(redirectToActionResult.ControllerName);
            Assert.Equal("Index", redirectToActionResult.ActionName);
        }
    }
}
