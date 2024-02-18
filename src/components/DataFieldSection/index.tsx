import { useTranslations } from "next-intl";
import { Container } from "../Container";
import { DataFieldClient } from "./DataFieldClient";

export const DataFieldSection = () => {
  const t = useTranslations('DataFieldSection')
  const dataFields = {
    Name: t('Name'),
    "Phone": t("Phone"),
    "Email address": t("Email address"),
    "Social Medias": t("Social Medias"),
    "Website": t("Website"),
    "Domain": t("Domain"),
    "Fulladdress": t("Fulladdress"),
    "Street": t("Street"),
    "Municipality": t("Municipality"),
    "Categories": t("Categories"),
    "Claimed": t("Claimed"),
    "Price": t("Price"),
    "Plus code": t("Plus code"),
    "Review Count": t("Review Count"),
    "Reviews": t("Reviews"),
    "Review URL": t("Review URL"),
    "Photos": t("Photos"),
    "Average Rating": t("Average Rating"),
    "Google Maps URL": t("Google Maps URL"),
    "Google Knowledge URL": t("Google Knowledge URL"),
    "Latitude": t("Latitude"),
    "Longitude": t("Longitude"),
    "Opening hours": t("Opening hours"),
    "Featured image": t("Featured image"),
    "Cid": t("Cid"),
    "Place Id": t("Place Id"),
    "Kgmid": t("Kgmid"),
  }
  return <section
    id="datafields"
    aria-label="What our customers are saying"
    className="bg-slate-50 py-20 sm:py-20"
  >
    <Container>
      <div className="mx-auto max-w-2xl md:text-center">
        <h2 className="font-display text-3xl tracking-tight text-main-text sm:text-4xl">
          {t("h2")}
        </h2>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
          {t("d1")}
        </p>
      </div>
      <DataFieldClient dataFields={dataFields} />
    </Container>
  </section>
}


