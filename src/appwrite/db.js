import {
  database,
  DATABASE_ID,
  COLLECTION_ID_TECH,
  COLLECTION_ID_NONTECH,
  COLLECTION_ID_FACULTY_ORGANISERS,
  COLLECTION_ID_STUDENT_ORGANISERS,
  COLLECTION_ID_KEY_HIGHLIGHTS,
  COLLECTION_ID_VIRTUAL, // Add this line
} from "../utils/config.js";

import { Query } from "appwrite";

export const dbService = {
  getTechEvents: async () => {
    try {
      const response = await database.listDocuments(
        DATABASE_ID,
        COLLECTION_ID_TECH,
        [Query.limit(100), Query.orderAsc("Rank")]
      );
      return response.documents;
    } catch (error) {
      console.error("Error fetching tech events:", error);
      throw error;
    }
  },

  getNonTechEvents: async () => {
    try {
      const response = await database.listDocuments(
        DATABASE_ID,
        COLLECTION_ID_NONTECH,
        [Query.limit(100), Query.orderAsc("Rank")]
      );
      return response.documents;
    } catch (error) {
      console.error("Error fetching non-tech events:", error);
      throw error;
    }
  },
  getVirtualEvents: async () => {
    try {
      const response = await database.listDocuments(
        DATABASE_ID,
        COLLECTION_ID_VIRTUAL,
        [Query.limit(100), Query.orderAsc("Rank")]
      );
      return response.documents;
    } catch (error) {
      console.error("Error fetching tech events:", error);
      throw error;
    }
  },

  getFacultyOrganisers: async () => {
    try {
      const response = await database.listDocuments(
        DATABASE_ID,
        COLLECTION_ID_FACULTY_ORGANISERS,
        [Query.limit(100), Query.orderAsc("Rank")]
      );
      return response.documents;
    } catch (error) {
      console.error("Error fetching faculty organisers:", error);
      throw error;
    }
  },

  getStudentOrganisers: async () => {
    try {
      const response = await database.listDocuments(
        DATABASE_ID,
        COLLECTION_ID_STUDENT_ORGANISERS,
        [Query.limit(100), Query.orderAsc("Rank")]
      );
      return response.documents;
    } catch (error) {
      console.error("Error fetching student organisers:", error);
      throw error;
    }
  },
  getKeyHighlights: async () => {
    try {
      const response = await database.listDocuments(
        DATABASE_ID,
        COLLECTION_ID_KEY_HIGHLIGHTS,
        [Query.limit(100), Query.orderAsc("Rank")]
      );
      return response.documents;
    } catch (error) {
      console.error("Error fetching key highlights:", error);
      throw error;
    }
  },
};
