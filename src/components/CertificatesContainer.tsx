import ContainerHeader from "./ContainerHeader";
import { FC, useContext } from "react";
import ContainerNavigation from "./ContainerNavigation";
import ContainerNavigationTab from "./ContainerNavigationTab";
import ContainerPills from "./ContainerPills";
import { GlobalContext, IGlobal } from "../context/globalContext";

const CERTIFICATESPENDINGS: [] = [
  /*   {
    title: "Ad`Publisher",
    progress: 50,
    img: "",
  }, */
];

const CERTIFICATESFINISHEDS: [] = [
  /*   {
    title: "Ad`Publisher",
    progress: 50,
    img: "",
  }, */
];

const CertificatesContainer: FC = () => {
  const { certificatesActiveNav } = useContext(GlobalContext) as IGlobal;
  return (
    <section className="mt-5">
      <ContainerHeader title="Certificados" />
      <ContainerNavigation>
        <ContainerNavigationTab
          name="Pendings"
          tabName="certificates"
          tabIndex={0}
        />
        <ContainerNavigationTab
          name="Finished"
          tabName="certificates"
          tabIndex={1}
        />
      </ContainerNavigation>
      {certificatesActiveNav === 0 && (
        <ContainerPills content={CERTIFICATESPENDINGS} />
      )}
      {certificatesActiveNav === 1 && (
        <ContainerPills content={CERTIFICATESFINISHEDS} />
      )}
    </section>
  );
};

export default CertificatesContainer;
