import { APIKit, UserAPIKit } from "./apiKit";
import cl from "../../utils/cl";
import history from "../../utils/history";
import { ValidationConstants } from "../../themes/validationConstants";

const StatusCodes = {
  Success: 1,
  Failure: 0,
  errorMessage: 8,
  ServerDown: 2,
  Unauthenticate: 3,
};

async function logout(key, msg) {
  //   await toast.error(msg?.data?.message);
  localStorage.clear();
  setTimeout(() => {
    if (key === "admin") {
      history.push("/admin");
    } else {
      history.push("/user/login");
    }
    window.location.reload();
  }, 800);
}

export const Method = {
  // Get Method
  async GET(url) {
    cl("input values in GET Method", url);
    return await new Promise((resolve, reject) => {
      APIKit.get(url, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          // Authorization:
          //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDhlOTA5NzY3YTVmYzUxZjI2MjkyYjciLCJzY29wZSI6ImFkbWluIiwidG9rZW5fZ2VuX2F0IjoxNjE5OTc0NDY5NTM5LCJpYXQiOjE2MTk5NzQ0Njl9.-l3z3g5uZ5v68GoMfkJZRup4yvVh926HByOEE17ZuFA",
        },
      })
        .then((result) => {
          console.log("result log", result);

          if (result.status === 200) {
            return resolve({
              status: 1,
              result: result,
            });
          } else if (result.status === 400) {
            return resolve({
              status: 8,
              result: result,
            });
          } else {
            if (result) {
              return reject({
                status: 3,
                error: result.data.message,
              });
            } else {
              return reject({
                status: 5,
                error: ValidationConstants.messageStatus500,
              });
            }
          }
        })
        .catch((err) => {
          if (err.response) {
            if (
              err.response.status !== null &&
              err.response.status !== undefined
            ) {
              if (err.response.status === 500) {
                return reject({
                  status: 2,
                  error: err,
                });
              } else if (err.response.status === 401) {
                logout("admin");
                return;
              } else if (
                err.response.status === 400 ||
                err.response.status === 401 ||
                err.response.status === 403 ||
                err.response.status === 404
              ) {
                return resolve({
                  status: 3,
                  error: err,
                });
              }
            }
          } else {
            return reject({
              status: 6,
              error: ValidationConstants.messageStatus500,
            });
          }
        });
    });
  },

  // Post Method
  async POST(url, body) {
    cl("input values in POST Method", url, body);
    return await new Promise((resolve, reject) => {
      APIKit.post(url, body, {
        headers: {
          "access-control-allow-origin": "*",
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then((result) => {
          console.log("result in then ---> ", result.data.success);

          if (result.data.success === 200) {
            cl("result inside 200", result);
            return resolve({
              status: 1,
              result: result,
            });
          } else if (result.data.success === 400) {
            console.log("400 error");

            return resolve({
              status: 4,
              error: result.data,
            });
          } else {
            if (result) {
              return reject({
                status: 3,
                error: result.data,
              });
            } else {
              return reject({
                status: 5,
                error: ValidationConstants.messageStatus500,
              });
            }
          }
        })
        .catch((err) => {
          console.log("result in catch ---> ", err);
          // cl("error inside post", err);
          if (err.response) {
            if (
              err.response.status !== null &&
              err.response.status !== undefined
            ) {
              if (err.response.status === 500) {
                return reject({
                  status: 2,
                  error: err,
                });
              } else if (err.response.status === 401) {
                logout("admin", err.response);
                return;
              } else if (
                err.response.status === 400 ||
                err.response.status === 401 ||
                err.response.status === 403 ||
                err.response.status === 404
              ) {
                return resolve({
                  status: 3,
                  error: err,
                });
              }
            }
          } else {
            return reject({
              status: 6,
              error: ValidationConstants.messageStatus500,
            });
          }
        });
    });
  },

  // Put Method
  async PUT(url, body) {
    cl(" input values in PUT Method", url, body);
    return await new Promise((resolve, reject) => {
      APIKit.put(url, body, {
        headers: {
          "access-control-allow-origin": "*",
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then((result) => {
          if (result.status === 200) {
            cl("result inside 200", result);
            return resolve({
              status: 1,
              result: result,
            });
          } else {
            if (result) {
              return reject({
                status: 3,
                error: result.data.message,
              });
            } else {
              return reject({
                status: 5,
                error: ValidationConstants.messageStatus500,
              });
            }
          }
        })
        .catch((err) => {
          cl("error inside put", err);
          if (err.response) {
            if (
              err.response.status !== null &&
              err.response.status !== undefined
            ) {
              if (err.response.status === 500) {
                return reject({
                  status: 2,
                  error: err?.response?.data?.error?.message,
                });
              } else if (err.response.status === 401) {
                logout("admin");
                return;
              } else if (
                err.response.status === 400 ||
                err.response.status === 401 ||
                err.response.status === 403 ||
                err.response.status === 404
              ) {
                return reject({
                  status: 4,
                  error: err?.response?.data?.message,
                });
              } else {
                return reject({
                  status: 8,
                  error: err,
                });
              }
            }
          } else {
            return reject({
              status: 6,
              error: ValidationConstants.messageStatus500,
            });
          }
        });
    });
  },

  // Delete Method
  async DELETE(url, body) {
    return await new Promise((resolve, reject) => {
      APIKit.delete(
        url,
        { data: body },
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      )

        .then((result) => {
          if (result.status === 200) {
            return resolve({
              status: 1,
              result: result,
            });
          } else {
            if (result) {
              return reject({
                status: 3,
                error: result.data.message,
              });
            } else {
              return reject({
                status: 5,
                error: ValidationConstants.messageStatus500,
              });
            }
          }
        })
        .catch((err) => {
          cl("error inside delete", err);
          if (err.response) {
            if (
              err.response.status !== null &&
              err.response.status !== undefined
            ) {
              if (err.response.status === 500) {
                return reject({
                  status: 2,
                  error: err,
                });
              } else if (err.response.status === 401) {
                logout("admin");
                return;
              } else if (
                err.response.status === 400 ||
                err.response.status === 401 ||
                err.response.status === 403 ||
                err.response.status === 404
              ) {
                return reject({
                  status: 4,
                  error: err?.response?.data?.message,
                });
              } else {
                return reject({
                  status: 8,
                  error: err,
                });
              }
            }
          } else {
            return reject({
              status: 6,
              error: ValidationConstants.messageStatus500,
            });
          }
        });
    });
  },

  GETDATA(url, fileName) {
    return new Promise((resolve, reject) => {
      APIKit.get(url, {
        responseType: "arraybuffer",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/csv",
        },
      })

        .then((result) => {
          if (result.status === 200) {
            const url = window.URL.createObjectURL(new Blob([result.data]));
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", fileName + ".csv"); //or any other extension
            document.body.appendChild(link);
            link.click();
            return resolve({
              status: 1,
              result: result,
            });
          } else {
            if (result) {
              return reject({
                status: 3,
                error: result.data.message,
              });
            } else {
              return reject({
                status: 4,
                error: "Something went wrong.",
              });
            }
          }
        })
        .catch((err) => {
          cl("error inside getdata", err);
          if (err.response) {
            if (
              err.response.status !== null &&
              err.response.status !== undefined
            ) {
              if (err.response.status === 500) {
                return reject({
                  status: 2,
                  error: err,
                });
              } else if (err.response.status === 401) {
                logout("admin");
                return;
              } else if (
                err.response.status === 400 ||
                err.response.status === 401 ||
                err.response.status === 403 ||
                err.response.status === 404
              ) {
                return reject({
                  status: 4,
                  error: err?.response?.data?.message,
                });
              } else {
                return reject({
                  status: 8,
                  error: err,
                });
              }
            }
          } else {
            return reject({
              status: 6,
              error: ValidationConstants.messageStatus500,
            });
          }
        });
    });
  },
};

//////////////////
//////////////////
//////////////////
// USER METHODS
//////////////////
//////////////////

export const UserMethod = {
  // Get Method
  async GET(url) {
    cl("input values in GET Method", url);
    return await new Promise((resolve, reject) => {
      UserAPIKit.get(url, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          // Authorization:
          //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDhlOTA5NzY3YTVmYzUxZjI2MjkyYjciLCJzY29wZSI6ImFkbWluIiwidG9rZW5fZ2VuX2F0IjoxNjE5OTc0NDY5NTM5LCJpYXQiOjE2MTk5NzQ0Njl9.-l3z3g5uZ5v68GoMfkJZRup4yvVh926HByOEE17ZuFA",
        },
      })
        .then((result) => {
          console.log("result log", result);

          if (result.status === 200) {
            return resolve({
              status: 1,
              result: result,
            });
          } else if (result.status === 400) {
            return resolve({
              status: 8,
              result: result,
            });
          } else {
            if (result) {
              return reject({
                status: 3,
                error: result.data.message,
              });
            } else {
              return reject({
                status: 5,
                error: ValidationConstants.messageStatus500,
              });
            }
          }
        })
        .catch((err) => {
          if (err.response) {
            if (
              err.response.status !== null &&
              err.response.status !== undefined
            ) {
              if (err.response.status === 500) {
                return reject({
                  status: 2,
                  error: err,
                });
              } else if (err.response.status === 401) {
                logout("admin");
                return;
              } else if (
                err.response.status === 400 ||
                err.response.status === 401 ||
                err.response.status === 403 ||
                err.response.status === 404
              ) {
                return resolve({
                  status: 3,
                  error: err,
                });
              }
            }
          } else {
            return reject({
              status: 6,
              error: ValidationConstants.messageStatus500,
            });
          }
        });
    });
  },

  // Post Method
  async POST(url, body) {
    cl("input values in POST Method", url, body);
    return await new Promise((resolve, reject) => {
      UserAPIKit.post(url, body, {
        headers: {
          "access-control-allow-origin": "*",
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then((result) => {
          console.log("result in then ---> ", result);

          if (result.status === 200) {
            cl("result inside 200", result);
            return resolve({
              status: 1,
              result: result,
            });
          } else if (result.status === 400) {
            return resolve({
              status: 4,
              error: result.data.message,
            });
          } else {
            if (result) {
              return reject({
                status: 3,
                error: result.data.message,
              });
            } else {
              return reject({
                status: 5,
                error: ValidationConstants.messageStatus500,
              });
            }
          }
        })
        .catch((err) => {
          console.log("result in catch ---> ", err);
          // cl("error inside post", err);
          if (err.response) {
            if (
              err.response.status !== null &&
              err.response.status !== undefined
            ) {
              if (err.response.status === 500) {
                return reject({
                  status: 2,
                  error: err,
                });
              } else if (err.response.status === 401) {
                logout("admin", err.response);
                return;
              } else if (
                err.response.status === 400 ||
                err.response.status === 401 ||
                err.response.status === 403 ||
                err.response.status === 404
              ) {
                return resolve({
                  status: 3,
                  error: err,
                });
              }
            }
          } else {
            return reject({
              status: 6,
              error: ValidationConstants.messageStatus500,
            });
          }
        });
    });
  },

  // Put Method
  async PUT(url, body) {
    cl(" input values in PUT Method", url, body);
    return await new Promise((resolve, reject) => {
      UserAPIKit.put(url, body, {
        headers: {
          "access-control-allow-origin": "*",
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then((result) => {
          if (result.status === 200) {
            cl("result inside 200", result);
            return resolve({
              status: 1,
              result: result,
            });
          } else {
            if (result) {
              return reject({
                status: 3,
                error: result.data.message,
              });
            } else {
              return reject({
                status: 5,
                error: ValidationConstants.messageStatus500,
              });
            }
          }
        })
        .catch((err) => {
          cl("error inside put", err);
          if (err.response) {
            if (
              err.response.status !== null &&
              err.response.status !== undefined
            ) {
              if (err.response.status === 500) {
                return reject({
                  status: 2,
                  error: err?.response?.data?.error?.message,
                });
              } else if (err.response.status === 401) {
                logout("admin");
                return;
              } else if (
                err.response.status === 400 ||
                err.response.status === 401 ||
                err.response.status === 403 ||
                err.response.status === 404
              ) {
                return reject({
                  status: 4,
                  error: err?.response?.data?.message,
                });
              } else {
                return reject({
                  status: 8,
                  error: err,
                });
              }
            }
          } else {
            return reject({
              status: 6,
              error: ValidationConstants.messageStatus500,
            });
          }
        });
    });
  },

  // Delete Method
  async DELETE(url, body) {
    return await new Promise((resolve, reject) => {
      UserAPIKit.delete(
        url,
        { data: body },
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      )

        .then((result) => {
          if (result.status === 200) {
            return resolve({
              status: 1,
              result: result,
            });
          } else {
            if (result) {
              return reject({
                status: 3,
                error: result.data.message,
              });
            } else {
              return reject({
                status: 5,
                error: ValidationConstants.messageStatus500,
              });
            }
          }
        })
        .catch((err) => {
          cl("error inside delete", err);
          if (err.response) {
            if (
              err.response.status !== null &&
              err.response.status !== undefined
            ) {
              if (err.response.status === 500) {
                return reject({
                  status: 2,
                  error: err,
                });
              } else if (err.response.status === 401) {
                logout("admin");
                return;
              } else if (
                err.response.status === 400 ||
                err.response.status === 401 ||
                err.response.status === 403 ||
                err.response.status === 404
              ) {
                return reject({
                  status: 4,
                  error: err?.response?.data?.message,
                });
              } else {
                return reject({
                  status: 8,
                  error: err,
                });
              }
            }
          } else {
            return reject({
              status: 6,
              error: ValidationConstants.messageStatus500,
            });
          }
        });
    });
  },

  GETDATA(url, fileName) {
    return new Promise((resolve, reject) => {
      UserAPIKit.get(url, {
        responseType: "arraybuffer",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/csv",
        },
      })

        .then((result) => {
          if (result.status === 200) {
            const url = window.URL.createObjectURL(new Blob([result.data]));
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", fileName + ".csv"); //or any other extension
            document.body.appendChild(link);
            link.click();
            return resolve({
              status: 1,
              result: result,
            });
          } else {
            if (result) {
              return reject({
                status: 3,
                error: result.data.message,
              });
            } else {
              return reject({
                status: 4,
                error: "Something went wrong.",
              });
            }
          }
        })
        .catch((err) => {
          cl("error inside getdata", err);
          if (err.response) {
            if (
              err.response.status !== null &&
              err.response.status !== undefined
            ) {
              if (err.response.status === 500) {
                return reject({
                  status: 2,
                  error: err,
                });
              } else if (err.response.status === 401) {
                logout("admin");
                return;
              } else if (
                err.response.status === 400 ||
                err.response.status === 401 ||
                err.response.status === 403 ||
                err.response.status === 404
              ) {
                return reject({
                  status: 4,
                  error: err?.response?.data?.message,
                });
              } else {
                return reject({
                  status: 8,
                  error: err,
                });
              }
            }
          } else {
            return reject({
              status: 6,
              error: ValidationConstants.messageStatus500,
            });
          }
        });
    });
  },
};
