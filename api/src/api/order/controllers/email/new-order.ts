export const newOrder = `

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
/* Figma Styles of your File */
:root {
  /* Colors */
  --mp-gradient: conic-gradient(
    from 198.36deg at 50% 50%,
    rgba(31, 57, 83, 1) 0%,
    rgba(163, 120, 255, 1) 53.125%,
    rgba(96, 255, 217, 1) 100%
  );
  --dark-text: #3e4349;
  --darker: #23272d;
  --dark-pire: #463332;
  --white-pire: #fbfbfb;
  --gold: linear-gradient(
    99.45deg,
    rgba(200, 145, 63, 1) 8.450865745544434%,
    rgba(240, 178, 84, 1) 16.721348464488983%,
    rgba(179, 129, 54, 1) 36.45833432674408%,
    rgba(48, 29, 0, 1) 100%
  );
  --flat-gold-dark: #c8913f;
  --bluish-tint: rgba(0, 0, 0, 0.3);
  --cic-gradient: linear-gradient(
    79.08deg,
    rgba(21, 24, 181, 1) 0%,
    rgba(110, 175, 217, 1) 100%
  );
  --cic-blur-30: rgba(20, 114, 255, 0.3);
  --cic-line-grad: linear-gradient(
    90deg,
    rgba(21, 24, 181, 1) 0%,
    rgba(110, 175, 217, 1) 100%
  );
  --black: #000000;
  --cic-grad-blur-30: linear-gradient(
    129.52deg,
    rgba(21, 24, 181, 0.3) 0%,
    rgba(110, 175, 217, 0.3) 100%
  );
  --ci-new: linear-gradient(
    80.58deg,
    rgba(0, 0, 0, 1) 6.77083358168602%,
    rgba(44, 30, 59, 1) 54.16666865348816%
  );
  --thegpt: conic-gradient(
      from 180deg at 50% 50%,
      rgba(55, 31, 69, 1) 0%,
      rgba(126, 60, 166, 0) 14.973936975002289%,
      rgba(0, 212, 200, 1) 100%
    ),
    conic-gradient(
      from 0deg at 50% 50%,
      rgba(55, 31, 69, 1) 0%,
      rgba(126, 60, 166, 1) 18.75%,
      rgba(255, 96, 96, 1) 100%
    );
  --linear: linear-gradient(
    80.58deg,
    rgba(44, 30, 59, 1) 38.54166567325592%,
    rgba(0, 0, 0, 1) 100%
  );
  --vow: linear-gradient(
    -90deg,
    rgba(0, 144, 236, 1) 0%,
    rgba(49, 231, 22, 1) 100%
  );
  --vow-dark: #343132;
  --gpt-bw-1: conic-gradient(
    from 0deg at 50% 50%,
    rgba(17, 14, 19, 1) 0%,
    rgba(42, 34, 47, 1) 18.75%,
    rgba(255, 255, 255, 1) 100%
  );
  --white-fs: #ffffff;
  --lmtd-grey: #949494;
  --lmtd-coffee-body: #b30c1c;
  --lmtd-coffee-sweetness: #e65832;
  --lmtd-coffee-flavour: #fee08b;
  --lmtd-coffee-acidity: #ebb40d;
  --lmtd-coffee-bitterness: #59391e;

  /* Fonts */
  --title-1-font-family: Helvetica-Bold, sans-serif;
  --title-1-font-size: 64px;
  --title-1-line-height: 60px;
  --title-1-font-weight: 700;
  --title-1-font-style: normal;
  --title-2-font-family: Helvetica-Bold, sans-serif;
  --title-2-font-size: 64px;
  --title-2-line-height: 60px;
  --title-2-font-weight: 700;
  --title-2-font-style: normal;
  --title-3-font-family: Helvetica-Regular, sans-serif;
  --title-3-font-size: 40px;
  --title-3-line-height: 47.04px;
  --title-3-font-weight: 400;
  --title-3-font-style: normal;
  --text-1-font-family: Helvetica-Regular, sans-serif;
  --text-1-font-size: 32px;
  --text-1-line-height: 100%;
  --text-1-font-weight: 400;
  --text-1-font-style: normal;
  --text-2-font-family: Helvetica-Regular, sans-serif;
  --text-2-font-size: 24px;
  --text-2-line-height: 100%;
  --text-2-font-weight: 400;
  --text-2-font-style: normal;
  --title-4-font-family: Helvetica-Bold, sans-serif;
  --title-4-font-size: 24px;
  --title-4-line-height: 100%;
  --title-4-font-weight: 700;
  --title-4-font-style: normal;
  --text-3-font-family: Helvetica-Regular, sans-serif;
  --text-3-font-size: 20px;
  --text-3-line-height: 100%;
  --text-3-font-weight: 400;
  --text-3-font-style: normal;
  --lmtd-email-med-font-family: CraftworkGrotesk-Regular, sans-serif;
  --lmtd-email-med-font-size: 20px;
  --lmtd-email-med-line-height: 43.5px;
  --lmtd-email-med-font-weight: 400;
  --lmtd-email-med-font-style: normal;

  /* Effects */
  --shadow-card-1-box-shadow: 0px 80px 100px 0px rgba(92, 67, 0, 0.15);
  --listings-shadow-box-shadow: 0px 40px 50px 0px rgba(45, 21, 20, 0.05);
  --soul-shade-box-shadow: inset 5px 3.19px 13.55px 0px rgba(81, 69, 59, 0.32),
    inset 45px 3.19px 90.09px 0px rgba(141, 113, 96, 0.4);
  --soul-shade-backdrop-filter: blur(23.52px);
  --smooth-shadow-ltd-doc-box-shadow: 0px 0.86px 1.59px 0px rgba(0, 0, 0, 0.04),
    0px 1.95px 3.62px 0px rgba(0, 0, 0, 0.06),
    0px 3.39px 6.31px 0px rgba(0, 0, 0, 0.08),
    0px 5.38px 10.02px 0px rgba(0, 0, 0, 0.09),
    0px 8.31px 15.46px 0px rgba(0, 0, 0, 0.1),
    0px 12.96px 24.12px 0px rgba(0, 0, 0, 0.12),
    0px 21.52px 40.04px 0px rgba(0, 0, 0, 0.14),
    0px 43px 80px 0px rgba(0, 0, 0, 0.18);
}
body {
width: 100%;
display: flex;
align-items: center;
justify-content: center;
}

.frame,
.frame * {
  box-sizing: border-box;

}
.frame {
  background: #ffffff;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  overflow: hidden;
   max-width: 1000px !important;
  border: 2px solid red;
}
.frame2 {
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
  justify-content: flex-start;
  align-self: stretch;
  flex-shrink: 0;
  position: relative;
  overflow: hidden;
}
.frame3 {
  background: linear-gradient(
    to left,
    rgba(0, 0, 0, 0.62),
    rgba(0, 0, 0, 0.62)
  );
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  align-self: stretch;
  flex-shrink: 0;
  height: 309px;
  position: relative;
  overflow: hidden;
}
.group-60 {
  flex-shrink: 0;
  width: 119.64px;
  height: 186px;
  position: static;
}
.group-70 {
  width: 119.64px;
  height: 186px;
  position: static;
}
.group-1000000946 {
  width: 119.64px;
  height: 186px;
  position: static;
}
.group-64 {
  width: 116.55px;
  height: 116.16px;
  position: absolute;
  left: 424.18px;
  top: 24px;
  overflow: visible;
}
.pi-re {
  background: linear-gradient(
    99.45deg,
    rgba(200, 145, 63, 1) 8.450865745544434%,
    rgba(240, 178, 84, 1) 16.721348464488983%,
    rgba(179, 129, 54, 1) 36.45833432674408%,
    rgba(48, 29, 0, 1) 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  font-family: "TimesNewRoman-Regular", sans-serif;
  font-size: 47.96995162963867px;
  line-height: 122%;
  letter-spacing: 0.105em;
  font-weight: 400;
  text-transform: uppercase;
  position: absolute;
  left: 422.68px;
  top: 156.72px;
  width: 119.18px;
  height: 32.71px;
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-text-stroke: 0.3747652471065521px
    linear-gradient(
      180deg,
      rgba(255, 239, 214, 1) 0%,
      rgba(164, 113, 36, 1) 100%
    );
}
.pivot-international-real-estate {
  background: linear-gradient(
    99.45deg,
    rgba(200, 145, 63, 1) 8.450865745544434%,
    rgba(240, 178, 84, 1) 16.721348464488983%,
    rgba(179, 129, 54, 1) 36.45833432674408%,
    rgba(48, 29, 0, 1) 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  font-family: "TimesNewRoman-Regular", sans-serif;
  font-size: 5.630331516265869px;
  line-height: 122%;
  letter-spacing: 0.11em;
  font-weight: 400;
  text-transform: uppercase;
  position: absolute;
  left: 423.15px;
  top: 203.46px;
  width: 119.18px;
  height: 6.54px;
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-text-stroke: 0.23459714651107788px
    linear-gradient(
      180deg,
      rgba(255, 239, 214, 1) 0%,
      rgba(164, 113, 36, 1) 100%
    );
}
._1996 {
  background: linear-gradient(
    99.45deg,
    rgba(200, 145, 63, 1) 8.450865745544434%,
    rgba(240, 178, 84, 1) 16.721348464488983%,
    rgba(179, 129, 54, 1) 36.45833432674408%,
    rgba(48, 29, 0, 1) 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  font-family: "TimesNewRoman-Regular", sans-serif;
  font-size: 6.56872034072876px;
  line-height: 122%;
  letter-spacing: 4.25em;
  font-weight: 400;
  text-transform: uppercase;
  position: absolute;
  left: 423.15px;
  top: 195.51px;
  width: 118.71px;
  height: 5.14px;
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-text-stroke: 0.23459714651107788px
    linear-gradient(
      180deg,
      rgba(255, 239, 214, 1) 0%,
      rgba(164, 113, 36, 1) 100%
    );
}
.frame-48095440 {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  align-self: stretch;
  flex-shrink: 0;
  height: 61px;
  position: relative;
}
.your-main-partner-for-managing-your-real-estate-in-uae {
  color: #ffffff;
  text-align: right;
  font-family: "Cairo-Bold", sans-serif;
  font-size: 16px;
  line-height: 32px;
  letter-spacing: -0.02em;
  font-weight: 700;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.div {
  color: var(--white-pire, #fbfbfb);
  text-align: right;
  font-family: "Cairo-ExtraBold", sans-serif;
  font-size: 16px;
  line-height: 122%;
  font-weight: 800;
  text-transform: uppercase;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.frame4 {
  background: #ffffff;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
  justify-content: center;
  align-self: stretch;
  flex-shrink: 0;
  position: relative;
  overflow: hidden;
}
.div2 {
  color: var(--black, #000000);
  text-align: center;
  font-family: "Cairo-Bold", sans-serif;
  font-size: 30px;
  line-height: 36px;
  letter-spacing: -0.02em;
  font-weight: 700;
  position: relative;
  align-self: stretch;
}
.div3 {
  color: var(--black, #000000);
  text-align: center;
  font-family: "Cairo-Regular", sans-serif;
  font-size: 20px;
  line-height: 100%;
  font-weight: 400;
  position: relative;
  align-self: stretch;
}
.customer-name-your-reservation-has-been-confirmed {
  color: var(--black, #000000);
  text-align: center;
  font-family: "Cairo-Bold", sans-serif;
  font-size: 30px;
  line-height: 36px;
  letter-spacing: -0.02em;
  font-weight: 700;
  position: relative;
  align-self: stretch;
}
.dear-customer-name-thank-you-for-trusting-pivot-international-real-estate-we-have-registered-your-booking-and-our-team-will-contact-you-as-soon-as-possible-to-proceed-with-the-next-steps {
  color: var(--black, #000000);
  text-align: center;
  font-family: "Cairo-Regular", sans-serif;
  font-size: 20px;
  line-height: 100%;
  font-weight: 400;
  position: relative;
  align-self: stretch;
}
.frame5 {
  background: #000000;
  display: flex;
  flex-direction: column;
  gap: 0px;
  align-items: center;
  justify-content: flex-start;
  align-self: stretch;
  flex-shrink: 0;
  position: relative;
  overflow: hidden;
}
.cards {
  display: flex;
  flex-direction: row;
  gap: 0px;
  align-items: flex-start;
  justify-content: flex-end;
  align-self: stretch;
  flex-shrink: 0;
  position: relative;
  overflow: hidden;
}
.frame6 {
  padding: 48px 24px 48px 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  justify-content: center;
  align-self: stretch;
  flex: 1;
  position: relative;
  overflow: hidden;
}
.frame7 {
  display: flex;
  flex-direction: column;
  gap: 17px;
  align-items: center;
  justify-content: flex-start;
  align-self: stretch;
  flex-shrink: 0;
  position: relative;
  overflow: hidden;
}
.transaction-id {
  color: var(--white-pire, #fbfbfb);
  text-align: center;
  font-family: "CraftworkGrotesk-Bold", sans-serif;
  font-size: 23px;
  line-height: 32px;
  letter-spacing: -0.02em;
  font-weight: 700;
  position: relative;
  align-self: stretch;
}
.t-id {
  color: var(--white-pire, #fbfbfb);
  text-align: center;
  font-family: "CraftworkGrotesk-Bold", sans-serif;
  font-size: 36px;
  line-height: 32px;
  letter-spacing: -0.02em;
  font-weight: 700;
  position: relative;
  align-self: stretch;
}
.div4 {
  color: #ffffff;
  text-align: center;
  font-family: "CraftworkGrotesk-Regular", sans-serif;
  font-size: 16px;
  line-height: 21px;
  letter-spacing: -0.02em;
  font-weight: 400;
  position: relative;
  align-self: stretch;
  display: flex;
  align-items: center;
  justify-content: center;
}
.press-the-button-below-to-see-your-digital-invoice {
  color: #ffffff;
  text-align: center;
  font-family: "CraftworkGrotesk-Regular", sans-serif;
  font-size: 16px;
  line-height: 21px;
  letter-spacing: -0.02em;
  font-weight: 400;
  position: relative;
  align-self: stretch;
  display: flex;
  align-items: center;
  justify-content: center;
}
.button {
  background: var(--white-pire, #fbfbfb);
  border-radius: 53px;
  padding: 8px 20px 8px 20px;
  display: flex;
  flex-direction: row;
  gap: 4px;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  position: relative;
  overflow: hidden;
}
.click-here {
  color: var(--black, #000000);
  text-align: center;
  font-family: "Cairo-Regular", sans-serif;
  font-size: 15px;
  line-height: 20px;
  font-weight: 400;
  position: relative;
}
.posts-13 {
  background: linear-gradient(
    270deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 1) 100%
  );
  flex-shrink: 0;
  width: 513px;
  height: 356px;
  position: relative;
  object-fit: cover;
}
.frame8 {
  background: #ffffff;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
  justify-content: flex-start;
  align-self: stretch;
  flex-shrink: 0;
  position: relative;
  overflow: hidden;
}
.frame9 {
  background: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;
  justify-content: flex-start;
  align-self: stretch;
  flex-shrink: 0;
  position: relative;
  overflow: hidden;
}
.transaction-summary {
  color: var(--black, #000000);
  text-align: right;
  font-family: "Cairo-Bold", sans-serif;
  font-size: 23px;
  line-height: 32px;
  letter-spacing: -0.02em;
  font-weight: 700;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.div5 {
  color: var(--black, #000000);
  text-align: right;
  font-family: "Cairo-Bold", sans-serif;
  font-size: 23px;
  line-height: 32px;
  letter-spacing: -0.02em;
  font-weight: 700;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.frame-48095441 {
  display: flex;
  flex-direction: row;
  gap: 104px;
  align-items: center;
  justify-content: flex-start;
  align-self: stretch;
  flex-shrink: 0;
  position: relative;
}
.you-have-reserved-and-paid-a-deposite-for-the-following-properties {
  color: var(--black, #000000);
  text-align: left;
  font-family: "Cairo-Regular", sans-serif;
  font-size: 16px;
  line-height: 21px;
  letter-spacing: -0.02em;
  font-weight: 400;
  position: relative;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.div6 {
  color: var(--black, #000000);
  text-align: right;
  font-family: "Cairo-Regular", sans-serif;
  font-size: 16px;
  line-height: 21px;
  letter-spacing: -0.02em;
  font-weight: 400;
  position: relative;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.cards2 {
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: flex-start;
  justify-content: flex-start;
  align-self: stretch;
  flex-shrink: 0;
  position: relative;
  overflow: hidden;
}
.frame10 {
  display: flex;
  flex-direction: column;
  gap: 0px;
  align-items: center;
  justify-content: flex-start;
  flex-shrink: 0;
  width: 200px;
  height: 200px;
  position: relative;
  overflow: hidden;
  object-fit: cover;
}
.frame11 {
  display: flex;
  flex-direction: column;
  gap: 0px;
  align-items: flex-start;
  justify-content: center;
  align-self: stretch;
  flex: 1;
  position: relative;
  overflow: hidden;
}
.frame-48095442 {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  align-self: stretch;
  flex-shrink: 0;
  height: 91px;
  position: relative;
}
.property {
  color: var(--black, #000000);
  text-align: right;
  font-family: "Cairo-Bold", sans-serif;
  font-size: 32px;
  line-height: 32px;
  letter-spacing: -0.02em;
  font-weight: 700;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.div7 {
  color: var(--black, #000000);
  text-align: right;
  font-family: "Cairo-Bold", sans-serif;
  font-size: 32px;
  line-height: 32px;
  letter-spacing: -0.02em;
  font-weight: 700;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.frame-480954402 {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  align-self: stretch;
  flex-shrink: 0;
  position: relative;
}
.offer-type {
  color: var(--black, #000000);
  text-align: left;
  font-family: "Cairo-Regular", sans-serif;
  font-size: 20px;
  line-height: 32px;
  letter-spacing: -0.02em;
  font-weight: 400;
  position: relative;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.rent-buy {
  color: var(--black, #000000);
  text-align: center;
  font-family: "Cairo-Regular", sans-serif;
  font-size: 20px;
  line-height: 32px;
  letter-spacing: -0.02em;
  font-weight: 400;
  position: relative;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}
.div8 {
  color: var(--black, #000000);
  text-align: right;
  font-family: "Cairo-Regular", sans-serif;
  font-size: 20px;
  line-height: 32px;
  letter-spacing: -0.02em;
  font-weight: 400;
  position: relative;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.frame-48095443 {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  align-self: stretch;
  flex-shrink: 0;
  position: relative;
}
.deposit {
  color: var(--black, #000000);
  text-align: left;
  font-family: "Cairo-Regular", sans-serif;
  font-size: 20px;
  line-height: 32px;
  letter-spacing: -0.02em;
  font-weight: 400;
  position: relative;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.deposite {
  color: var(--black, #000000);
  text-align: center;
  font-family: "Cairo-Regular", sans-serif;
  font-size: 20px;
  line-height: 32px;
  letter-spacing: -0.02em;
  font-weight: 400;
  position: relative;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}
.frame-480954412 {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  align-self: stretch;
  flex-shrink: 0;
  position: relative;
}
.price {
  color: var(--black, #000000);
  text-align: center;
  font-family: "Cairo-Regular", sans-serif;
  font-size: 20px;
  line-height: 32px;
  letter-spacing: -0.02em;
  font-weight: 400;
  position: relative;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}
.frame12 {
  background: #ffffff;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  justify-content: center;
  align-self: stretch;
  flex-shrink: 0;
  position: relative;
  overflow: hidden;
}
.div9 {
  color: #000000;
  text-align: center;
  font-family: "Cairo-Regular", sans-serif;
  font-size: 15px;
  line-height: 20px;
  font-weight: 400;
  position: relative;
  align-self: stretch;
}
.we-know-that-long-term-relationships-with-our-customers-are-the-foundation-of-our-success-therefore-we-strive-to-provide-high-quality-services-at-competitive-prices-we-use-the-latest-technologies-and-methods-in-real-estate-management-and-we-continuously-work-to-improve-and-expand-our-services-to-meet-your-needs {
  color: var(--black, #000000);
  text-align: center;
  font-family: "Cairo-Regular", sans-serif;
  font-size: 15px;
  line-height: 20px;
  font-weight: 400;
  position: relative;
  align-self: stretch;
}
.frame13 {
  background: #000000;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  justify-content: flex-start;
  align-self: stretch;
  flex-shrink: 0;
  position: relative;
  overflow: hidden;
}
.frame-48095446 {
  display: flex;
  flex-direction: row;
  gap: 75px;
  align-items: center;
  justify-content: flex-start;
  align-self: stretch;
  flex-shrink: 0;
  position: relative;
}
.frame-48095445 {
  flex-shrink: 0;
  width: 86.36px;
  height: 134px;
  position: relative;
}
.group-602 {
  position: absolute;
  inset: 0;
}
.group-702 {
  width: 86.36px;
  height: 134.78px;
  position: static;
}
.group-10000009462 {
  width: 86.36px;
  height: 134.78px;
  position: static;
}
.group-642 {
  width: 84.12px;
  height: 84.17px;
  position: absolute;
  left: 1.08px;
  top: 0px;
  overflow: visible;
}
.pi-re2 {
  background: linear-gradient(
    99.45deg,
    rgba(200, 145, 63, 1) 8.450865745544434%,
    rgba(240, 178, 84, 1) 16.721348464488983%,
    rgba(179, 129, 54, 1) 36.45833432674408%,
    rgba(48, 29, 0, 1) 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  font-family: "TimesNewRoman-Regular", sans-serif;
  font-size: 34.6231575012207px;
  line-height: 122%;
  letter-spacing: 0.105em;
  font-weight: 400;
  text-transform: uppercase;
  position: absolute;
  left: 0px;
  top: 96.18px;
  width: 86.02px;
  height: 23.71px;
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-text-stroke: 0.27049341797828674px
    linear-gradient(
      180deg,
      rgba(255, 239, 214, 1) 0%,
      rgba(164, 113, 36, 1) 100%
    );
}
.pivot-international-real-estate2 {
  background: linear-gradient(
    99.45deg,
    rgba(200, 145, 63, 1) 8.450865745544434%,
    rgba(240, 178, 84, 1) 16.721348464488983%,
    rgba(179, 129, 54, 1) 36.45833432674408%,
    rgba(48, 29, 0, 1) 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  font-family: "TimesNewRoman-Regular", sans-serif;
  font-size: 4.063790798187256px;
  line-height: 122%;
  letter-spacing: 0.11em;
  font-weight: 400;
  text-transform: uppercase;
  position: absolute;
  left: 0.34px;
  top: 130.04px;
  width: 86.02px;
  height: 4.74px;
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-text-stroke: 0.1693246215581894px
    linear-gradient(
      180deg,
      rgba(255, 239, 214, 1) 0%,
      rgba(164, 113, 36, 1) 100%
    );
}
._19962 {
  background: linear-gradient(
    99.45deg,
    rgba(200, 145, 63, 1) 8.450865745544434%,
    rgba(240, 178, 84, 1) 16.721348464488983%,
    rgba(179, 129, 54, 1) 36.45833432674408%,
    rgba(48, 29, 0, 1) 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  font-family: "TimesNewRoman-Regular", sans-serif;
  font-size: 4.741089344024658px;
  line-height: 122%;
  letter-spacing: 4.25em;
  font-weight: 400;
  text-transform: uppercase;
  position: absolute;
  left: 0.34px;
  top: 124.28px;
  width: 85.68px;
  height: 3.73px;
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-text-stroke: 0.1693246215581894px
    linear-gradient(
      180deg,
      rgba(255, 239, 214, 1) 0%,
      rgba(164, 113, 36, 1) 100%
    );
}
.frame-48095444 {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  position: relative;
}
.cards3 {
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
  justify-content: center;
  align-self: stretch;
  flex-shrink: 0;
  position: relative;
  overflow: hidden;
}
.frame-74 {
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
  justify-content: center;
  flex: 1;
  width: 306px;
  position: relative;
}
.frame14 {
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  justify-content: flex-start;
  align-self: stretch;
  flex: 1;
  position: relative;
  overflow: hidden;
}
.your-best-choice-for-real-estate-in-abu-dhabi {
  color: #ffffff;
  text-align: left;
  font-family: "Cairo-Bold", sans-serif;
  font-size: 24px;
  line-height: 20px;
  font-weight: 700;
  text-transform: uppercase;
  position: relative;
  align-self: stretch;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.follow-our-instagram-page {
  color: var(--white-fs, #ffffff);
  text-align: left;
  font-family: "Cairo-Bold", sans-serif;
  font-size: 15px;
  line-height: 20px;
  font-weight: 700;
  position: relative;
  align-self: stretch;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.pivotuae {
  color: var(--white-fs, #ffffff);
  text-align: left;
  font-family: "Cairo-Regular", sans-serif;
  font-size: 15px;
  line-height: 20px;
  font-weight: 400;
  position: relative;
  align-self: stretch;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.cards4 {
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
  justify-content: flex-end;
  flex-shrink: 0;
  position: relative;
  overflow: hidden;
}
.frame15 {
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  justify-content: flex-start;
  flex-shrink: 0;
  position: relative;
  overflow: hidden;
}
.contact {
  color: var(--white-fs, #ffffff);
  text-align: left;
  font-family: "Arial-Bold", sans-serif;
  font-size: 15px;
  line-height: 20px;
  font-weight: 700;
  position: relative;
  align-self: stretch;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.address-mussafah-m-16-block-10-office-16 {
  color: var(--white-fs, #ffffff);
  text-align: left;
  font-family: "Arial-Regular", sans-serif;
  font-size: 15px;
  line-height: 20px;
  font-weight: 400;
  position: relative;
  align-self: stretch;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.mobile-0502413030 {
  color: var(--white-fs, #ffffff);
  text-align: left;
  font-family: "Arial-Regular", sans-serif;
  font-size: 15px;
  line-height: 20px;
  font-weight: 400;
  position: relative;
  align-self: stretch;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.landline-026313114 {
  color: var(--white-fs, #ffffff);
  text-align: left;
  font-family: "Arial-Regular", sans-serif;
  font-size: 15px;
  line-height: 20px;
  font-weight: 400;
  position: relative;
  align-self: stretch;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.frame16 {
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  justify-content: center;
  flex-shrink: 0;
  position: relative;
  overflow: hidden;
}
._2024-lmtd-specialty-roastery-all-rights-reserved {
  color: var(--white-fs, #ffffff);
  text-align: left;
  font-family: "Arial-Regular", sans-serif;
  font-size: 8px;
  line-height: 20px;
  letter-spacing: 0.2em;
  font-weight: 400;
  text-transform: uppercase;
  position: relative;
  align-self: stretch;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}


  </style>
</head>
<body>
<div class="frame">
  <div class="frame2">
    <div
      class="frame3"
      style="
        background: url('https://pire-space.blr1.digitaloceanspaces.com/53aa9cac3dc16313fc324f61d8e07749.png') center;
        background-size: cover;
        background-repeat: no-repeat;
      "
    >
      <div class="group-60">
        <div class="group-70">
          <div class="group-1000000946">
            <img class="group-64" src="https://pire-space.blr1.digitaloceanspaces.com/37b1753b8248efaff081c6241ded78a3.svg" />
            <!-- <div class="pi-re">PiRE</div>
            <div class="pivot-international-real-estate">
              pivot international Real Estate
            </div>
            <div class="_1996">1996</div> -->
          </div>
        </div>
      </div>
      <div class="frame-48095440">
        <div class="your-main-partner-for-managing-your-real-estate-in-uae">
          Your Main Partner for Managing Your Real Estate in UAE
        </div>
        <div class="div">شريكك الاول لإدارة عقاراتك داخل الإمارات</div>
      </div>
    </div>
  </div>
  <div class="frame4">
    <div class="div2"><%= foundOrder.customer_name %>, لقد تم تأكيد حجزك للعقار</div>
    <div class="div3">
      عزيزنا *اسم العميل* شكرا لك على ثقتك في شركة المحور العالمية لإدارة
      العقارات, لقد قمنا بتسجيل عملية الحجز وسوف يتواصل معك فريقنا في اقرب وقت
      لمباشرة الخطوات.
    </div>
    <div class="customer-name-your-reservation-has-been-confirmed">
      <%= foundOrder.customer_name %>, Your Reservation Has been Confirmed
    </div>
    <div
      class="dear-customer-name-thank-you-for-trusting-pivot-international-real-estate-we-have-registered-your-booking-and-our-team-will-contact-you-as-soon-as-possible-to-proceed-with-the-next-steps"
    >
      Dear <%= foundOrder.customer_name %>, Thank you for trusting Pivot International Real
      Estate. We have registered your booking, and our team will contact you as
      soon as possible to proceed with the next steps.
    </div>
  </div>
  <div class="frame5">
    <div class="cards">
      <div class="frame6">
        <div class="frame7">
          <div class="transaction-id">رمز المعاملة - Transaction ID</div>
          <div class="t-id">#<%= foundOrder.id %></div>
          <div class="div4">
            قم بالضغط على الزر ادناه للحصول على فاتورتك الالكترونية
          </div>
          <div class="press-the-button-below-to-see-your-digital-invoice">
            Press the button below to see your digital invoice
          </div>
        </div>
        <div class="button">
          <div class="click-here">
<a href='<%= foundOrder.invoice_url %>' class="click-here">
            اضغط هنا Click Here
</a>

          </div>
        </div>
      </div>
      <img class="posts-13" src="https://pire-space.blr1.digitaloceanspaces.com/6cf94324a920ab8455d3e163b0d8837c.png" />
    </div>
  </div>
  <div class="frame8">
    <div class="frame9">
      <div class="frame-48095440">
        <div class="transaction-summary">Transaction Summary</div>
        <div class="div5">ملخص المعاملة</div>
      </div>
      <div class="frame-48095441">
        <div
          class="you-have-reserved-and-paid-a-deposite-for-the-following-properties"
        >
          You have reserved and paid a deposite for the following properties
        </div>
        <div class="div6">
          لقد قمت بحجز و دفع العربون للعقار او العقارات التالية
        </div>
      </div>
    </div>
 <div class="cards2">
      <% foundOrder.products.forEach(product => { %>
      <div class="frame10">
        <img class="frame10" src="<%= product.image %>" />
        <div class="frame11">
          <div class="frame-48095442">
            <div class="property">Property:</div>
            <div class="div7"><%= product.title %></div>
          </div>
          <div class="frame-480954402">
            <div class="offer-type">Offer type:</div>
            <div class="rent-buy"><%= product.option %></div>
            <div class="div8">نوع العرض:</div>
          </div>
          <div class="frame-48095443">
            <div class="deposit">Deposit:</div>
            <div class="deposite"><%= product.deposit %></div>
            <div class="div8">العربون المدفوع:</div>
          </div>
          <div class="frame-480954412">
            <div class="price">Price:</div>
            <div class="price"><%= product.price %> AED</div>
            <div class="div8">السعر الاجمالي:</div>
          </div>
        </div>
      </div>
      <% }); %>
    </div>
  <div class="frame12">
    <div class="div9">
      نحن نعلم بأن العلاقات طويلة المدى مع عملائنا هي اساس نجاحنا. لذلك نسعى
      جاهدين لتوفير خدمات عالية الجودة وبأسعار تنافسية، ونستخدم أحدث التقنيات
      والأساليب في إدارة العقارات، ونعمل بشكل مستمر على تحسين خدماتنا وتوسيع
      نطاقها لتلبية احتياجاتكم.
    </div>
    <div
      class="we-know-that-long-term-relationships-with-our-customers-are-the-foundation-of-our-success-therefore-we-strive-to-provide-high-quality-services-at-competitive-prices-we-use-the-latest-technologies-and-methods-in-real-estate-management-and-we-continuously-work-to-improve-and-expand-our-services-to-meet-your-needs"
    >
      We know that long-term relationships with our customers are the foundation
      of our success. Therefore, we strive to provide high-quality services at
      competitive prices. We use the latest technologies and methods in real
      estate management, and we continuously work to improve and expand our
      services to meet your needs.
    </div>
  </div>
  <div class="frame13">
    <div class="frame-48095446">
      <div class="frame-48095445">
        <div class="group-702">
          <div class="group-10000009462">
            <img class="group-642" src="https://pire-space.blr1.digitaloceanspaces.com/37b1753b8248efaff081c6241ded78a3.svg" />
            <div class="pi-re2">PiRE</div>
            <!-- <div class="pivot-international-real-estate2">
              pivot international Real Estate
            </div>
            <div class="_19962">1996</div> -->
          </div>
        </div>
      </div>
      <div class="frame-48095444">
        <div class="cards3">
          <div class="frame-74">
            <div class="frame14">
              <div class="your-best-choice-for-real-estate-in-abu-dhabi">
                Your Best Choice For Real Estate In Abu Dhabi
              </div>
              <div class="follow-our-instagram-page">
                FOLLOW OUR INSTAGRAM PAGE
              </div>
              <div class="pivotuae">
                <a href="https://www.instagram.com/pivotuae/?igsh=MXdvancydTE5M2Fzdw%3D%3D">
                  @Pivotuae
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="cards4">
          <div class="frame15">
            <div class="contact">CONTACT </div>
            <div class="address-mussafah-m-16-block-10-office-16">
              Address :Mussafah M16 - Block 10 - Office 16
            </div>
          </div>
          <div class="frame15">
            <div class="mobile-0502413030">Mobile : 0502413030</div>
            <div class="landline-026313114">Landline : 026313114</div>
          </div>
          <div class="frame16">
            <div class="_2024-lmtd-specialty-roastery-all-rights-reserved">
              © 2024 PIRE Specialty Roastery, All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

</body>
</html>


`;
