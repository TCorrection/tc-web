import { axiosInstance } from "./axios";

export namespace API_TYPES {
  export type Result = {
    id: string;
    century: number;
    correctedText: string;
    originalText: string;
    precision: number;
    recall: number;
    createdAt: Date;
    updatedAt: Date;
  };

  export type AllResults = Result[];
}

export namespace API {
  export const getAllResults = async () => {
    try {
      const result = await axiosInstance.get("/correction/getAll");
      return result.data;
    } catch (error: any) {
      alert(error.message);
    }
  };

  export const correctText = async (
    text: string,
    century: number,
    correctedText?: string
  ) => {
    try {
      const result = await axiosInstance.post("/correction/process", {
        text,
        century,
        correctedText,
      });
      return result.data;
    } catch (error: any) {
      alert(error.message);
    }
  };

  export const getById = async (id: string) => {
    try {
      const result = await axiosInstance.get("/correction/get", {
        params: { id },
      });
      return result.data;
    } catch (error: any) {
      alert(error.message);
    }
  };
}
