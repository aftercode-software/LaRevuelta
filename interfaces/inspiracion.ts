export interface InspirationCard {
  title: string;
  desc: string;
  slug: string;
  img: string;
  imgAbove?: string;
  audioHover: string;
  fullAudio?: string;
}

export interface InspirationPageContent {
  slug: string;
  title: string;
  secondImg?: string;
  audioHover: string;
  renderContent({
    ref,
    tittleRef,
    descRef,
    imgContainerRef,
  }: {
    ref: React.RefObject<HTMLDivElement>;
    tittleRef: React.RefObject<HTMLDivElement>;
    descRef: React.RefObject<HTMLDivElement>;
    imgContainerRef: React.RefObject<HTMLDivElement>;
  }): React.ReactNode;
}
