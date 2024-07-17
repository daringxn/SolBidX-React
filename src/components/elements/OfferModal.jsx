import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";

export default function ({ item, open, onClose, onSubmit }) {
  const { t } = useTranslation();

  return (
    <>
      <div
        className={`modal fade popup ${open ? "show d-block" : ""} `}
        id="popup_bid"
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <button type="button" className="close" onClick={onClose}>
              <span aria-hidden="true">×</span>
            </button>
            <div className="modal-body">
              <div className="image">
                <img
                  src={
                    item?.image
                      ? "/" + item?.image
                      : "/assets/images/backgroup-section/popup.png"
                  }
                  alt=""
                  width="520px"
                />
              </div>
              <div className="logo-rotate">
                <img
                  src={
                    item?.collector?.avatar
                      ? "/" + item?.collector?.avatar
                      : "/assets/images/item-background/item6-img.png"
                  }
                  alt=""
                />
              </div>
              <Formik
                initialValues={{
                  price: "",
                }}
                validationSchema={Yup.object().shape({
                  price: Yup.string().required(
                    t("errors.form.required", { name: "Price" })
                  ),
                })}
                onSubmit={onSubmit}
              >
                {({ values, handleSubmit, handleChange, handleBlur }) => (
                  <>
                    <fieldset className="email">
                      <input
                        type="number"
                        className="style-1"
                        id="price"
                        placeholder="Price*"
                        name="price"
                        tabIndex={2}
                        aria-required="true"
                        required
                        value={values.price}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <ErrorMessage name="price">
                        {(msg) => (
                          <div className="mt-5px">
                            <span className="text-danger fs-14px">{msg}</span>
                          </div>
                        )}
                      </ErrorMessage>
                    </fieldset>
                    <a
                      href="#"
                      className="tf-button style-1 h50"
                      onClick={handleSubmit}
                    >
                      Submit
                    </a>
                  </>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
      {/* <div className={`modal-backdrop fade  ${open ? "d-block show" : "d-none"}`} onClick={handleBidModal} /> */}
    </>
  );
}
