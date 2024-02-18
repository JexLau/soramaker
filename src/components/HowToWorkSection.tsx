import { Container } from "./Container";
import { MapIcon, ArrowDownIcon, FolderOpenIcon} from '@heroicons/react/24/outline';
import { FreeToTry } from "./DownloadBtn";
import { useTranslations } from "next-intl";

export const HowToWorkSection = () => {
  const t = useTranslations("HowToWorkSection")
  const ct = useTranslations("Common")
  // console.log('ct', ct)
  return (
    <section
      id="howtowork"
      aria-label={t("h2")}
      className="bg-[#0d0821] py-20 sm:py-24 relative"
    >
      <Container>
        <div className="mx-auto max-w-4xl">
        <h2 className="font-display text-3xl tracking-tight text-main-text sm:text-4xl">
            {t("h2")}
          </h2>
          <div className="mt-12">
            <div className="mb-10">
              <h3 className="text-2xl font-semibold text-main-text flex items-center"><MapIcon className="h-8 w-8 mr-2 text-blue-600" />
              {t("t1")}
              </h3>
              <p className="mt-2 text-lg text-main-text">
              {t("t11")}
              </p>
            </div>

            <div className="mb-10">
              
              <h3 className="text-2xl font-semibold text-main-text flex items-center"><FolderOpenIcon className="h-8 w-8 mr-2 text-blue-600" />{t("t2")}</h3>
              <p className="mt-2 text-lg text-main-text">
              {t("t21")}
              </p>
            </div>

            <div>
              
              <h3 className="text-2xl font-semibold text-main-text flex items-center"><ArrowDownIcon className="h-8 w-8 mr-2 text-blue-600" />{t("t3")}</h3>
              <p className="mt-2 text-lg text-main-text">
                {t("t31")}
              </p>
            </div>
          </div>
        </div>
      </Container>
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 translate-y-1/2">
        <FreeToTry text={ct("Free to try")} />
      </div>
    </section>
  );
}
