import PageClient from "./Client";

export const PageCompoent = ({id}: {id: string}) => {
  return <div className="flex h-full relative overflow-hidden mt-[-30px]">
    <PageClient id={id} />
  </div>
}

