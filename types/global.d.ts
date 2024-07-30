type homeScreenSliderAreaDataType = {
  id: string;
  name: string;
  imageUrl: string;
};

type categoryListDataType = {
  id: string;
  name: string;
  imageUrl: string;
  areaId: string;
};

type serviceListDataType = {
  id: string;
  title: string;
  description: string;
  categoryId: string;
  imageUrl: string;
}

interface ActionButtonItemType {
  id: number;
  name: string;
  icon: any;
  url?: string;
}

interface ActionButtonProfileType{
  id: number;
  name: string;
  icon: any;
  url?: string;
}

interface Auth0Credentials {
  accessToken: string;
  idToken: string;
  expiresIn: number;
  tokenType: string;
  scope: string;
}

interface UserInfo {
  name: string;
  email: string;
  picture: string;
  sub: string;
}

export interface Service {
  id: string;
  name: string;
  shortDescription: string;
  description: string;
  imageId: string;
  imageUrl: string;
  userId: string;
  statusId: string;
  categoryId: string;
}

export interface Category {
  id: string;
  name: string;
  imageId: string;
  imageUrl: string;
  areaId: string;
}

export interface Area {
  id: string;
  name: string;
  imageId: string;
  imageUrl: string;
}

type onboardingSwiperDataType = {
  id: number;
  title: string;
  description: string;
  image: any;
};

type BannerDataTypes = {
  bannerImageUrl: any;
};