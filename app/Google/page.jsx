"use client";
import React from "react";
import styles from "./Google.module.css";
const page = () => {
  return (
    <div className={styles.page}>
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
      <div className={styles.contentBox}>
        <img
          className={styles.googleLogo}
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          alt=""
        />
        <div className={styles.inputContainer}>
          <div className={styles.inputLogosBox}>
            <img
              className={styles.inputLogos}
              src="https://static-00.iconduck.com/assets.00/search-icon-2048x2048-cmujl7en.png"
              alt=""
            />
          </div>
          <input className={styles.textField} type="text" />
          <div className={styles.inputLogosBox}>
            <img
              style={{ opacity: 1 }}
              className={styles.miclogo}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Google_mic.svg/1432px-Google_mic.svg.png"
              alt=""
            />
          </div>
          <div className={styles.inputLogosBox}>
            <img
              style={{ opacity: 1 }}
              className={styles.lenslogo}
              src="https://seeklogo.com/images/G/google-lens-logo-0F69C74B83-seeklogo.com.png"
              alt=""
            />
          </div>
        </div>
        <div className={styles.buttonsBox}>
          <button>Google Search</button>
          <button>I'm Feeling Lucky</button>
        </div>
        <div className={styles.languageBox}>
          <span>Google offered in:</span>
          <a href="https://www.google.com/">हिन्दी</a>
          <a href="https://www.google.com/">বাংলা</a>
          <a href="https://www.google.com/">తెలుగు</a>
          <a href="https://www.google.com/">मराठी</a>
          <a href="https://www.google.com/">தமிழ்</a>
          <a href="https://www.google.com/">ગુજરાતી</a>
          <a href="https://www.google.com/">ಕನ್ನಡ</a>
          <a href="https://www.google.com/">മലയാളം</a>
          <a href="https://www.google.com/">ਪੰਜਾਬੀ</a>
        </div>
      </div>
    </div>
  );
};

export default page;
