import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { lazy, Suspense } from "react";
import CenteredContainer from "../components/CenteredContainer";
import Loader from "../components/Loader";

const LoginPage = lazy(() => import("../pages/Login"));
const RegisterPage = lazy(() => import("../pages/Register"));
const DashboardPage = lazy(() => import("../pages/Dashboard"));
const ProductsPage = lazy(() => import("../pages/Products"));
const CostumersPage = lazy(() => import("../pages/Costumers"));

const Router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        index
        element={
          <Suspense
            fallback={
              <CenteredContainer>
                <Loader />
              </CenteredContainer>
            }
          >
            <LoginPage />
          </Suspense>
        }
      />
      <Route
        path="register"
        element={
          <Suspense
            fallback={
              <CenteredContainer>
                <Loader />
              </CenteredContainer>
            }
          >
            <RegisterPage />
          </Suspense>
        }
      />
      <Route path="dashboard">
        <Route
          index
          element={
            <Suspense
              fallback={
                <CenteredContainer>
                  <Loader />
                </CenteredContainer>
              }
            >
              <DashboardPage />
            </Suspense>
          }
        />
        <Route
          path="products"
          element={
            <Suspense
              fallback={
                <CenteredContainer>
                  <Loader />
                </CenteredContainer>
              }
            >
              <ProductsPage />
            </Suspense>
          }
        />
        <Route
          path="costumers"
          element={
            <Suspense
              fallback={
                <CenteredContainer>
                  <Loader />
                </CenteredContainer>
              }
            >
              <CostumersPage />
            </Suspense>
          }
        />
      </Route>
    </>
  )
);

export default Router;
