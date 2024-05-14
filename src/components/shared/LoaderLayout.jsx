import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import store from "@/store";
import { setLoaderCount } from "@/store/reducers/loader/loaderSlice";

const Loader = () => {
  return (
    <div>
      <div className="d-flex justify-content-center">
        <div className="spinner-border loader" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="modal-backdrop best_zind"></div>
      </div>
    </div>
  );
};

export default function LoaderLayout({ children }) {
  const [preview, setPreview] = useState(false);

  const dispatch = useDispatch();
  const loader = useSelector((state) => state.loader.count);
  const user = useSelector((state) => state.user);
  const router = useRouter();

  useEffect(() => {
    store.subscribe(() => {
      const state = store.getState();
      if (state) {
        localStorage.setItem("state", JSON.stringify(state));
      }
    });

    dispatch(setLoaderCount(-loader));

    if (!user.profile) {
      router.push("/login");
    } else setPreview(true);
  }, [user.profile]);
  return (
    <div>
      {!preview && router.pathname !== "/login" ? null : children}
      {loader > 0 && <Loader />}
    </div>
  );
}
