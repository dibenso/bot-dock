import React from "react";
import { Formik } from 'formik';
import * as Yup from "yup";

const ContactSchema = Yup.object().shape({
  email: Yup.string()
    .email("Email Is Invalid")
    .required("Email Is Required")
    .max(255, "Email Must Be 255 Characters Or Less"),
  firstName: Yup.string().required("Your First Name Is Required")
    .max(64, "Name Must Be 64 Characters Or Less"),
  lastName: Yup.string()
    .required("Your Last Name Is Required")
    .max(64, "Last Name Must Be 64 Characters Or Less")
});

class Contact extends React.Component {
    render() {
        return (
          <>
          <div className="container mx-auto px-4"></div>
            <div className="hidden sm:block" aria-hidden="true">
              <div className="py-5">
                <div className="border-t border-gray-200" />
              </div>
            </div>
      
            <div className="mt-10 sm:mt-0">
              <div className="md:grid md:grid-cols-3 md:gap-6">
                <div className="md:col-span-1">
                  <div className="px-4 sm:px-0">
                    <h3 className="text-lg font-medium leading-6 text-gray-900 px-4">Contact Information</h3>
                  </div>
                </div>
                <div>
                  <Formik
                    initialValues={{ firstName: "", lastName: "", email: ""}}
                    validationSchema={ContactSchema}
                    onSubmit={async values => {
                      /* make API request here:
                      
                      const response = await fetch(`/user/${userId}`, { method: "PUT", body: JSON.stringify(values) })
                      const data = await response.json()
                      */
                      console.log(values)
                    }}
                  >
                    {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                      <form onSubmit={handleSubmit}>
                        <div className="shadow overflow-hidden sm:rounded-md">
                          <div className="px-4 py-5 bg-white sm:p-6">
                            <div className="grid grid-cols-6 gap-6">
                              <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">
                                  First name
                                </label>
                                <input
                                  type="text"
                                  placeholder="Enter your first name"
                                  id="first_name"
                                  value={values.firstName}
                                  onBlur={handleBlur("firstName")}
                                  onChange={handleChange("firstName")}
                                  autoComplete="given-name"
                                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border-solid border-1"
                                />
                                <p style={{ backgroundColor: "rgba(255, 0, 0, 0.3)"}}>{errors.firstName && touched.firstName && errors.firstName}</p>
                              </div>
          
                              <div className="col-span-6 sm:col-span-3 border-solid">
                                <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">
                                  Last name
                                </label>
                                <input
                                  type="text"
                                  placeholder="Enter your last name"
                                  id="last_name"
                                  value={values.lastName}
                                  onBlur={handleBlur("lastName")}
                                  onChange={handleChange("lastName")}
                                  autoComplete="family-name"
                                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                />
                                <p style={{ backgroundColor: "rgba(255, 0, 0, 0.3)"}}>{errors.lastName && touched.lastName && errors.lastName}</p>
                              </div>
          
                              <div className="col-span-6 sm:col-span-4">
                                <label htmlFor="email_address" className="block text-sm font-medium text-gray-700">
                                  Email address
                                </label>
                                <input
                                  type="email"
                                  placeholder="Enter your email address"
                                  id="email_address"
                                  value={values.email}
                                  onBlur={handleBlur("email")}
                                  onChange={handleChange("email")}
                                  autoComplete="email"
                                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                />
                                <p style={{ backgroundColor: "rgba(255, 0, 0, 0.3)"}}>{errors.email && touched.email && errors.email}</p>
                              </div>
                            </div>
                          </div>
                          <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                            <button
                              type="submit"
                              onClick={handleSubmit}
                              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                              Save
                            </button>
                          </div>
                        </div>
                      </form>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
      
            <div className="hidden sm:block" aria-hidden="true">
              <div className="py-5">
                <div className="border-t border-gray-200" />
              </div>
            </div>
      
            <div className="mt-10 sm:mt-0">
              <div className="md:grid md:grid-cols-3 md:gap-6">
                <div className="md:col-span-1">
                  <div className="px-4 sm:px-0">
                    <h3 className="text-lg font-medium leading-6 text-gray-900 px-4">Notifications</h3>
                    <p className="mt-1 text-sm text-gray-600 px-4">Notification Preference.</p>
                  </div>
                </div>
                <div className="mt-5 md:mt-0 md:col-span-2">
                  <form action="#" method="POST">
                    <div className="shadow overflow-hidden sm:rounded-md">
                      <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                        <fieldset>
                          <legend className="text-base font-medium text-gray-900">By Email</legend>
                          <div className="mt-4 space-y-4">
                            <div className="flex items-start">
                              <div className="flex items-center h-5">
                                <input
                                  id="comments"
                                  name="comments"
                                  type="checkbox"
                                  className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                />
                              </div>
                              <div className="ml-3 text-sm">
                                <label htmlFor="comments" className="font-medium text-gray-700">
                                  Comments
                                </label>
                                <p className="text-gray-500">Get notified when someone uploads a new bot.</p>
                              </div>
                            </div>
                            <div className="flex items-start">
                            </div>
                          </div>
                        </fieldset>
                        <fieldset>
                          <div>
                            <legend className="text-base font-medium text-gray-900">Push Notifications</legend>
                            <p className="text-sm text-gray-500">These are delivered via SMS to your mobile phone.</p>
                          </div>
                          <div className="mt-4 space-y-4">
                            <div className="flex items-center">
                              <input
                                id="push_everything"
                                name="push_notifications"
                                type="radio"
                                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                              />
                              <label htmlFor="push_everything" className="ml-3 block text-sm font-medium text-gray-700">
                                Everything
                              </label>
                            </div>
                            <div className="flex items-center">
                              <input
                                id="push_email"
                                name="push_notifications"
                                type="radio"
                                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                              />
                              <label htmlFor="push_email" className="ml-3 block text-sm font-medium text-gray-700">
                                Same as email
                              </label>
                            </div>
                            <div className="flex items-center">
                              <input
                                id="push_nothing"
                                name="push_notifications"
                                type="radio"
                                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                              />
                              <label htmlFor="push_nothing" className="ml-3 block text-sm font-medium text-gray-700">
                                No push notifications
                              </label>
                            </div>
                          </div>
                        </fieldset>
                      </div>
                      <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                        <button
                          type="submit"
                          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </>
        )
      }
    }
export default Contact