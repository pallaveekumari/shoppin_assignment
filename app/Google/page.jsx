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
          <a href="">हिन्दी</a>
          <a href="">বাংলা</a>
          <a href="">తెలుగు</a>
          <a href="">मराठी</a>
          <a href="">தமிழ்</a>
          <a href="">ગુજરાતી</a>
          <a href="">ಕನ್ನಡ</a>
          <a href="">മലയാളം</a>
          <a href="">ਪੰਜਾਬੀ</a>
        </div>
      </div>
      <div className={styles.footerBox}>
        <div className={styles.upperFooterBox}>
          <span className={styles.indiaText}>India</span>
        </div>
        <div className={styles.lowerFooterBox}>
          <div className={styles.lowerFooterLeftBox}>
            <a href="https://ads.google.com/intl/en_in/home/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1">
              Advertising
            </a>
            <a href="https://www.google.com/intl/en_in/business/">Business</a>
            <a href="https://www.google.com/search/howsearchworks/?fg=1">
              How Search Works
            </a>
          </div>
          <div className={styles.lowerFooterRightBox}>
            <a href="https://policies.google.com/privacy?hl=en-IN&fg=1">
              Privacy
            </a>
            <a href="https://policies.google.com/terms?hl=en-IN&fg=1">Terms</a>
            <a href="">Settings</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
