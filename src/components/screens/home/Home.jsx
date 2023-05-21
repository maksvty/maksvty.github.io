import {useCallback, useContext, useEffect, useMemo, useState} from "react";

import React from 'react';

import styles from "./Home.module.css";

import {AuthContext} from "../../../providers/AuthProvider.jsx";
import Categories from "../../Categories/Categories.jsx";

function Home() {
  return (
    <>
      <Categories />
    </>
  );
}

export default Home;
