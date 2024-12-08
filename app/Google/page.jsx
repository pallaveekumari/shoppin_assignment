"use client";
import React from "react";
import styles from "./Google.module.css";
const page = () => {
  return (
    <div className={styles.page}>
      {/* Navbar Starts */}
      <div className={styles.navbar}>
        <div className={styles.leftBox}>
          <a
            href="https://about.google/?fg=1&utm_source=google-IN&utm_medium=referral&utm_campaign=hp-header"
            className={styles.navOptions}
          >
            About
          </a>
          <a
            href="https://store.google.com/IN?utm_source=hp_header&utm_medium=google_ooo&utm_campaign=GS100042&hl=en-IN"
            className={styles.navOptions}
          >
            Store
          </a>
        </div>
        <div className={styles.rightBox}>
          <a
            className={styles.navOptions}
            href="https://mail.google.com/mail/&ogbl"
          >
            Gmail
          </a>
          <a
            className={styles.navOptions}
            href="https://www.google.com/imghp?hl=en&ogbl"
          >
            Images
          </a>
          <img
            className={styles.menuIcon}
            src="https://cdn-icons-png.flaticon.com/512/1237/1237932.png"
            alt=""
          />
          <div className={styles.profile}>P</div>
        </div>
      </div>
    </div>
  );
};

export default page;
