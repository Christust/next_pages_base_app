import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";

import authService from "@/services/factories/authService";
import {
  setUser,
  setToken,
  setRefreshToken,
} from "@/store/reducers/user/userSlice";
import LoginLayout from "@/components/layouts/LoginLayout";

export default function LoginPage() {
  const dispatch = useDispatch();
  const router = useRouter();
  const user = useSelector((state) => state.user);
  // Generamos el valid schema con yup
  const loginSchema = Yup.object().shape({
    email: Yup.string().required("El Usuario es requerido"),
    password: Yup.string().required("La Contraseña es requerida"),
  });

  // Valores iniciales del form
  const initialValues = {
    email: "",
    password: "",
  };

  // Funcion que maneja el submit
  function login(payload) {
    authService.login(payload).then((res) => {
      if (res.error) return;
      if (res.data?.user) {
        dispatch(setUser(res.data.user));
        dispatch(setToken(res.data.token));
        dispatch(setRefreshToken(res.data.refresh));
        router.push("/");
      }
    });
  }

  // Validar Form
  function validForm(isInitialValid, dirty, isValid) {
    return (!isInitialValid && !dirty) || !isValid;
  }

  useEffect(() => {
    if (user.profile) {
      router.push("/");
    }
  }, []);
  return (
    <div className="loginPage">
      <div className="card shadow col-6 p-5">
        <Formik
          initialValues={initialValues}
          validationSchema={loginSchema}
          onSubmit={(payload) => login(payload)}
        >
          {/* Sustraemos lo que necesitamos de formik */}
          {(props) => {
            const {
              handleChange,
              handleBlur,
              handleSubmit,
              errors,
              touched,
              dirty,
              isValid,
              isInitialValid,
            } = props;

            return (
              <form
                className="row justify-content-center"
                onSubmit={handleSubmit}
              >
                <div className="mb-3">
                  <label className="form-label" htmlFor="email">
                    Usuario
                  </label>
                  <input
                    className={
                      "form-control " +
                      (errors.email && touched.email && "is-invalid")
                    }
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  ></input>
                  <div className="invalid-feedback">{errors.email}</div>
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="password">
                    Contraseña
                  </label>
                  <input
                    className={
                      "form-control " +
                      (errors.password && touched.password && "is-invalid")
                    }
                    name="password"
                    type="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  ></input>
                  <div className="invalid-feedback">{errors.password}</div>
                </div>
                <button
                  className="btn btn-primary"
                  disabled={validForm(isInitialValid, dirty, isValid)}
                  type="submit"
                >
                  Enviar
                </button>
              </form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}

LoginPage.getLayout = function getLayout(page) {
  return <LoginLayout>{page}</LoginLayout>;
};
