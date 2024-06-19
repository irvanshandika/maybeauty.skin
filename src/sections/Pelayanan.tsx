"use client";
import React from "react";
import { Carousel } from "@mantine/carousel";
import { Card, Text } from "@mantine/core";

function Pelayanan() {
  return (
    <>
      <section className="my-14 z-0" id="offers">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto my-10 lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:mt-0 mt-10 lg:col-span-7">
            <p className="mt-3 text-lg font-bold text-[#F675A8]">OFFERS</p>
            <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight">
              Keuntungan menarik hanya untukmu
            </h1>
          </div>
          <div className="flex justify-center lg:mt-0 lg:col-span-5 lg:flex order-1 lg:order-2 overflow-x-hidden">
            <Carousel slideSize="70%" height={350} slideGap="md" controlsOffset="xl" loop dragFree>
              {/* Slide 1 */}
              <Carousel.Slide>
                <div className="translate-y-[40px]">
                  <Card shadow="sm" radius="md" withBorder style={{ padding: "50px" }}>
                    <Card.Section>
                      <div className="flex justify-center items-center">
                        <svg width="54" height="54" viewBox="0 0 54 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M37.6983 7.97918L42.5783 12.8592C49.749 20.0325 53.333 23.6165 53.333 28.0698C53.333 32.5258 49.749 36.1098 42.5783 43.2805C35.405 50.4538 31.821 54.0378 27.365 54.0378C22.9116 54.0378 19.325 50.4538 12.1543 43.2832L7.27431 38.4032C3.15431 34.2805 1.09298 32.2218 0.327643 29.5472C-0.440357 26.8725 0.215643 24.0325 1.52764 18.3552L2.28231 15.0805C3.38364 10.3018 3.93564 7.91251 5.57031 6.27518C7.20764 4.64051 9.59698 4.08851 14.3756 2.98718L17.6503 2.22985C23.3303 0.920512 26.1676 0.264512 28.8423 1.02984C31.517 1.79784 33.5783 3.85918 37.6983 7.97918ZM24.389 33.5792C22.5943 31.7872 22.6076 29.2112 23.6823 27.1712C23.4163 26.7869 23.2932 26.3216 23.3345 25.856C23.3758 25.3904 23.5789 24.954 23.9084 24.6226C24.2379 24.2911 24.6732 24.0856 25.1385 24.0416C25.6038 23.9976 26.0698 24.118 26.4556 24.3818C27.3623 23.9018 28.357 23.6458 29.349 23.6565C29.8794 23.6615 30.3862 23.8769 30.7577 24.2555C31.1293 24.6341 31.3353 25.1447 31.3303 25.6752C31.3254 26.2056 31.1099 26.7123 30.7313 27.0839C30.3528 27.4555 29.8421 27.6615 29.3116 27.6565C28.6942 27.6793 28.1106 27.9448 27.6876 28.3952C26.6556 29.4272 26.925 30.4618 27.2156 30.7525C27.509 31.0432 28.541 31.3125 29.573 30.2805C31.6636 28.1898 35.2743 27.4965 37.5863 29.8085C39.381 31.6032 39.3676 34.1792 38.293 36.2192C38.5574 36.6035 38.679 37.0682 38.637 37.5328C38.5949 37.9974 38.3918 38.4327 38.0627 38.7634C37.7337 39.0941 37.2993 39.2993 36.8349 39.3436C36.3705 39.3878 35.9053 39.2684 35.5196 39.0058C34.3229 39.6622 32.9349 39.881 31.5943 39.6245C31.0745 39.5177 30.6184 39.2088 30.3263 38.7657C30.0343 38.3226 29.9302 37.7817 30.037 37.2618C30.1438 36.742 30.4527 36.2859 30.8958 35.9939C31.3389 35.7018 31.8798 35.5977 32.3996 35.7045C32.8716 35.8032 33.6343 35.6485 34.2876 34.9952C35.3196 33.9605 35.0503 32.9285 34.7596 32.6378C34.4663 32.3472 33.4343 32.0778 32.4023 33.1098C30.3116 35.2005 26.701 35.8938 24.389 33.5792ZM21.3863 22.8192C21.8815 22.3238 22.2742 21.7358 22.5422 21.0887C22.8101 20.4415 22.9479 19.748 22.9478 19.0476C22.9477 18.3472 22.8096 17.6536 22.5414 17.0066C22.2733 16.3596 21.8803 15.7717 21.385 15.2765C20.8896 14.7813 20.3016 14.3886 19.6545 14.1207C19.0073 13.8527 18.3138 13.7149 17.6134 13.715C16.913 13.7152 16.2194 13.8532 15.5724 14.1214C14.9254 14.3895 14.3375 14.7825 13.8423 15.2778C12.8423 16.2782 12.2806 17.6349 12.2808 19.0495C12.2811 20.464 12.8432 21.8205 13.8436 22.8205C14.844 23.8206 16.2007 24.3822 17.6153 24.382C19.0298 24.3817 20.3863 23.8196 21.3863 22.8192Z"
                            fill="#F675A8"></path>
                        </svg>
                      </div>
                    </Card.Section>
                    <Card.Section>
                      <Text size="xl" style={{ marginTop: "1rem" }}>
                        Murah
                      </Text>
                      <Text size="lg" style={{ marginTop: "0.5rem" }}>
                        Harga terjangkau untuk produk berkualitas, merawat kulit tanpa harus membebani dompetmu.
                      </Text>
                    </Card.Section>
                  </Card>
                </div>
              </Carousel.Slide>
              {/* Slide 2 */}
              <Carousel.Slide>
                <div className="translate-y-[40px]">
                  <Card shadow="sm" radius="md" withBorder style={{ padding: "50px" }}>
                    <Card.Section>
                      <div className="flex justify-center items-center">
                        <svg width="64" height="65" viewBox="0 0 64 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M50.6666 24.7039C50.6678 21.4903 49.8393 18.3308 48.2614 15.5313C46.6834 12.7318 44.4095 10.387 41.6596 8.72406C38.9098 7.06108 35.7772 6.13618 32.565 6.03889C29.3529 5.9416 26.1701 6.67523 23.3246 8.16874C20.4792 9.66225 18.0675 11.8651 16.323 14.564C14.5785 17.2628 13.5604 20.3664 13.3671 23.5742C13.1738 26.7819 13.8119 29.9853 15.2196 32.8741C16.6274 35.763 18.7571 38.2395 21.4026 40.0639L13.3333 54.0372L19.3493 54.2852L22.5706 59.3705L31.8133 43.3599L31.9999 43.3705C32.0933 43.3759 32.1226 43.3625 32.1866 43.3599L41.4293 59.3705L44.7146 54.3946L50.6666 54.0372L42.5973 40.0639C45.0869 38.3497 47.1223 36.0559 48.528 33.38C49.9338 30.7041 50.6677 27.7265 50.6666 24.7039ZM18.6666 24.7039C18.6666 22.0668 19.4486 19.4889 20.9137 17.2963C22.3787 15.1036 24.4611 13.3947 26.8975 12.3855C29.3338 11.3763 32.0147 11.1123 34.6011 11.6267C37.1875 12.1412 39.5633 13.4111 41.428 15.2758C43.2927 17.1405 44.5626 19.5163 45.0771 22.1027C45.5915 24.6891 45.3275 27.37 44.3183 29.8063C43.3091 32.2427 41.6002 34.3251 39.4075 35.7901C37.2149 37.2552 34.637 38.0372 31.9999 38.0372C28.4637 38.0372 25.0723 36.6325 22.5718 34.132C20.0713 31.6315 18.6666 28.2401 18.6666 24.7039Z"
                            fill="#F675A8"
                          />
                          <path d="M32 32.7039C36.4183 32.7039 40 29.1221 40 24.7039C40 20.2856 36.4183 16.7039 32 16.7039C27.5817 16.7039 24 20.2856 24 24.7039C24 29.1221 27.5817 32.7039 32 32.7039Z" fill="#F675A8" />
                        </svg>
                      </div>
                    </Card.Section>
                    <Card.Section>
                      <Text size="xl" style={{ marginTop: "1rem" }}>
                        Lengkap
                      </Text>
                      <Text size="lg" style={{ marginTop: "0.5rem" }}>
                        Tak perlu cari di toko lain, semua yang kamu butuhkan ada disini.
                      </Text>
                    </Card.Section>
                  </Card>
                </div>
              </Carousel.Slide>
              {/* Slide 3 */}
              <Carousel.Slide>
                <div className="translate-y-[40px]">
                  <Card shadow="sm" radius="md" withBorder style={{ padding: "50px" }}>
                    <Card.Section>
                      <div className="flex justify-center items-center">
                        <svg width="54" height="55" viewBox="0 0 52 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M45.3333 5.70388H2.66667V0.370544H45.3333V5.70388ZM33.84 27.0372H29.3333V31.5439C27.6533 34.0772 26.6667 37.0905 26.6667 40.3705C26.6667 41.2772 26.7733 42.1572 26.9067 43.0372H2.66667V27.0372H0V21.7039L2.66667 8.37054H45.3333L48 21.7039V25.3039C46.32 24.7172 44.5333 24.3705 42.6667 24.3705C39.3867 24.3705 36.3733 25.3572 33.84 27.0372ZM24 27.0372H8V37.7039H24V27.0372ZM48.9067 31.9439L39.3333 41.5172L35.0933 37.2772L32 40.3705L39.3333 48.3705L52 35.7039L48.9067 31.9439Z"
                            fill="#F675A8"></path>
                        </svg>
                      </div>
                    </Card.Section>
                    <Card.Section>
                      <div className=" flex flex-col justify-center items-center">
                        <Text size="xl" style={{ marginTop: "1rem" }}>
                          Terpercaya
                        </Text>
                        <Text size="lg" style={{ marginTop: "0.5rem" }}>
                          Produk terjamin, kamu tidak perlu khawatir belanja disini.
                        </Text>
                      </div>
                    </Card.Section>
                  </Card>
                </div>
              </Carousel.Slide>
            </Carousel>
          </div>
        </div>
      </section>
    </>
  );
}

export default Pelayanan;
