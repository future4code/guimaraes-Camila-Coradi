import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage/LoginPage";
import SingUpPage from "../pages/SingUpPage/SingUpPage";
import RecipesListPage from "../pages/RecipesListPage/RecipesListPage";
import AddRecipesPage from "../pages/AddRecipesPage/AddRecipesPage";
import RecipeDetailPage from "../pages/RecipeDetailPage/RecipeDetailPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Header from "../components/Header/Header";

const Router = () => {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route exact path="/login" element={<LoginPage />} />

        <Route exact path="/cadastro" element={<SingUpPage />} />

        <Route exact path="/" element={<RecipesListPage />} />

        <Route exact path="/adicionar-receita" element={<AddRecipesPage />} />

        <Route exact path="/detalhe/:id" element={<RecipeDetailPage />} />

        <Route exact path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
