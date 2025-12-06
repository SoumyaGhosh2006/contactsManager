// const {constants}= require("../constants")

// const errorHandler = (err,req, res, next)=> {
//     const statusCode= res.statusCode ? res.statusCode : 500;

//     switch (statusCode) {
//         case VALIDATION_ERROR:
//             res.json({
//                 title: "VALIDATION FAILED!",
//                 message: err.message,
//                 stackTrace: err.stack
//             })
//             break;

//         case NOT_FOUND:
//             res.json({
//                 title: "NOT FOUND!",
//                 message: err.message,
//                 stackTrace: err.stack
//             })
//         case FORBIDDEN:
//             res.json({
//                 title: "Forbidden!",
//                 message: err.message,
//                 stackTrace: err.stack
//             })
//         case UNAUTHORIZED:
//             res.json({
//             title: "Unauthorized!",
//             message: err.message,
//             stackTrace: err.stack
//             })
           

//         default:
//             console.log("no error all good");
//             break;
//     }

// };
// module.exports = errorHandler









// const { constants } = require("../constants");

// const errorHandler = (err, req, res, next) => {
//   const statusCode = res.statusCode ? res.statusCode : 500;

//   switch (statusCode) {
//     case constants.VALIDATION_ERROR:
//       res.json({
//         title: "VALIDATION FAILED!",
//         message: err.message,
//         stackTrace: err.stack,
//       });
//       break;

//     case constants.NOT_FOUND:
//       res.json({
//         title: "NOT FOUND!",
//         message: err.message,
//         stackTrace: err.stack,
//       });
//       break;

//     case constants.FORBIDDEN:
//       res.json({
//         title: "Forbidden!",
//         message: err.message,
//         stackTrace: err.stack,
//       });
//       break;

//     case constants.UNAUTHORIZED:
//       res.json({
//         title: "Unauthorized!",
//         message: err.message,
//         stackTrace: err.stack,
//       });
//       break;

//     default:
//       console.log("no error, all good");
//       break;
//   }
// };

// module.exports = errorHandler;



const { constants } = require("../constants");

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;

  switch (statusCode) {
    case constants.VALIDATION_ERROR:
      res.json({
        title: "VALIDATION FAILED!",
        message: err.message,
        stackTrace: err.stack,
      });
      break;

    case constants.NOT_FOUND:
      res.json({
        title: "NOT FOUND!",
        message: err.message,
        stackTrace: err.stack,
      });
      break;

    case constants.FORBIDDEN:
      res.json({
        title: "Forbidden!",
        message: err.message,
        stackTrace: err.stack,
      });
      break;

    case constants.UNAUTHORIZED:
      res.json({
        title: "Unauthorized!",
        message: err.message,
        stackTrace: err.stack,
      });
      break;

    default:
      console.log("no error, all good");
      break;
  }
};

module.exports = errorHandler;
