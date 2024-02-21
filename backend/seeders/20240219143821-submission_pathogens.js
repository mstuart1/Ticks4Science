'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('submission_pathogen',[
      {
        "id": 1,
        "submissionId": 98,
        "pathogenId": 13,
        "createdAt": "2022-08-03 14:12:24",
        "updatedAt": "2022-08-03 14:12:24",
        "deletedAt": "2022-08-03 14:12:25",
        "result": null
      },
      {
        "id": 2,
        "submissionId": 435,
        "pathogenId": 4,
        "createdAt": "2022-08-16 18:05:26",
        "updatedAt": "2022-08-16 18:05:26",
        "deletedAt": "2022-08-16 18:05:27",
        "result": null
      },
      {
        "id": 3,
        "submissionId": 435,
        "pathogenId": 5,
        "createdAt": "2022-08-16 18:05:28",
        "updatedAt": "2022-08-16 18:05:28",
        "deletedAt": "2022-08-16 18:05:30",
        "result": null
      },
      {
        "id": 4,
        "submissionId": 435,
        "pathogenId": 4,
        "createdAt": "2022-08-16 18:05:29",
        "updatedAt": "2022-08-16 18:05:29",
        "deletedAt": "2022-08-16 18:05:30",
        "result": null
      },
      {
        "id": 5,
        "submissionId": 33,
        "pathogenId": 11,
        "createdAt": "2022-08-16 21:47:51",
        "updatedAt": "2022-08-16 21:47:51",
        "deletedAt": "2022-08-16 21:48:00",
        "result": null
      },
      {
        "id": 6,
        "submissionId": 33,
        "pathogenId": 6,
        "createdAt": "2022-08-16 21:47:52",
        "updatedAt": "2022-08-16 21:47:52",
        "deletedAt": "2022-08-16 21:48:02",
        "result": null
      },
      {
        "id": 7,
        "submissionId": 33,
        "pathogenId": 2,
        "createdAt": "2022-08-16 21:47:53",
        "updatedAt": "2022-08-16 21:47:53",
        "deletedAt": "2022-08-16 21:48:02",
        "result": null
      },
      {
        "id": 8,
        "submissionId": 33,
        "pathogenId": 17,
        "createdAt": "2022-08-16 21:47:55",
        "updatedAt": "2022-08-16 21:47:55",
        "deletedAt": "2022-08-16 21:47:55",
        "result": null
      },
      {
        "id": 9,
        "submissionId": 33,
        "pathogenId": 16,
        "createdAt": "2022-08-16 21:47:56",
        "updatedAt": "2022-08-16 21:47:56",
        "deletedAt": "2022-08-16 21:47:59",
        "result": null
      },
      {
        "id": 10,
        "submissionId": 33,
        "pathogenId": 17,
        "createdAt": "2022-08-16 21:47:57",
        "updatedAt": "2022-08-16 21:47:57",
        "deletedAt": "2022-08-16 21:47:59",
        "result": null
      },
      {
        "id": 11,
        "submissionId": 340,
        "pathogenId": 1,
        "createdAt": "2023-03-22 16:50:31",
        "updatedAt": "2023-03-22 16:50:31",
        "deletedAt": "2023-03-22 16:50:35",
        "result": null
      },
      {
        "id": 12,
        "submissionId": 21,
        "pathogenId": 5,
        "createdAt": "2023-07-21 11:19:50",
        "updatedAt": "2023-08-19 01:07:28",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 13,
        "submissionId": 21,
        "pathogenId": 6,
        "createdAt": "2023-07-21 11:19:50",
        "updatedAt": "2023-08-19 01:07:29",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 14,
        "submissionId": 1003,
        "pathogenId": 5,
        "createdAt": "2023-07-21 14:00:56",
        "updatedAt": "2023-10-23 17:53:05",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 15,
        "submissionId": 1003,
        "pathogenId": 6,
        "createdAt": "2023-07-21 14:00:56",
        "updatedAt": "2023-10-23 17:53:07",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 16,
        "submissionId": 686,
        "pathogenId": 5,
        "createdAt": "2023-07-21 14:41:52",
        "updatedAt": "2023-08-19 01:28:55",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 17,
        "submissionId": 686,
        "pathogenId": 6,
        "createdAt": "2023-07-21 14:41:52",
        "updatedAt": "2023-08-19 01:28:57",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 18,
        "submissionId": 1006,
        "pathogenId": 5,
        "createdAt": "2023-07-21 21:18:08",
        "updatedAt": "2023-08-19 01:43:46",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 19,
        "submissionId": 1006,
        "pathogenId": 6,
        "createdAt": "2023-07-21 21:18:08",
        "updatedAt": "2023-08-19 01:43:48",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 20,
        "submissionId": 1007,
        "pathogenId": 5,
        "createdAt": "2023-07-21 21:18:40",
        "updatedAt": "2023-08-19 01:44:16",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 21,
        "submissionId": 1007,
        "pathogenId": 6,
        "createdAt": "2023-07-21 21:18:40",
        "updatedAt": "2023-08-19 01:44:17",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 22,
        "submissionId": 90,
        "pathogenId": 5,
        "createdAt": "2023-07-21 21:30:58",
        "updatedAt": "2023-08-19 01:08:42",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 23,
        "submissionId": 90,
        "pathogenId": 6,
        "createdAt": "2023-07-21 21:30:58",
        "updatedAt": "2023-08-19 01:08:44",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 24,
        "submissionId": 98,
        "pathogenId": 5,
        "createdAt": "2023-07-21 21:32:12",
        "updatedAt": "2023-10-23 17:07:06",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 25,
        "submissionId": 98,
        "pathogenId": 6,
        "createdAt": "2023-07-21 21:32:12",
        "updatedAt": "2023-10-23 17:07:07",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 26,
        "submissionId": 75,
        "pathogenId": 1,
        "createdAt": "2023-07-21 21:33:30",
        "updatedAt": "2023-08-17 15:33:25",
        "deletedAt": null,
        "result": "positive"
      },
      {
        "id": 27,
        "submissionId": 75,
        "pathogenId": 3,
        "createdAt": "2023-07-21 21:33:30",
        "updatedAt": "2023-08-17 15:33:33",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 28,
        "submissionId": 75,
        "pathogenId": 4,
        "createdAt": "2023-07-21 21:33:30",
        "updatedAt": "2023-08-17 15:33:37",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 29,
        "submissionId": 75,
        "pathogenId": 11,
        "createdAt": "2023-07-21 21:33:30",
        "updatedAt": "2023-07-21 21:33:30",
        "deletedAt": "2023-10-02 16:24:09",
        "result": "pending"
      },
      {
        "id": 30,
        "submissionId": 75,
        "pathogenId": 12,
        "createdAt": "2023-07-21 21:33:30",
        "updatedAt": "2023-07-21 21:33:30",
        "deletedAt": "2023-10-02 16:24:09",
        "result": "pending"
      },
      {
        "id": 31,
        "submissionId": 667,
        "pathogenId": 1,
        "createdAt": "2023-07-24 16:20:59",
        "updatedAt": "2023-08-17 15:50:26",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 32,
        "submissionId": 667,
        "pathogenId": 3,
        "createdAt": "2023-07-24 16:20:59",
        "updatedAt": "2023-08-17 15:50:28",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 33,
        "submissionId": 667,
        "pathogenId": 4,
        "createdAt": "2023-07-24 16:20:59",
        "updatedAt": "2023-08-17 15:50:30",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 34,
        "submissionId": 667,
        "pathogenId": 11,
        "createdAt": "2023-07-24 16:20:59",
        "updatedAt": "2023-07-24 16:20:59",
        "deletedAt": "2023-10-02 16:28:29",
        "result": "pending"
      },
      {
        "id": 35,
        "submissionId": 667,
        "pathogenId": 12,
        "createdAt": "2023-07-24 16:20:59",
        "updatedAt": "2023-07-24 16:20:59",
        "deletedAt": "2023-10-02 16:28:29",
        "result": "pending"
      },
      {
        "id": 36,
        "submissionId": 43,
        "pathogenId": 5,
        "createdAt": "2023-07-24 16:51:56",
        "updatedAt": "2023-10-23 17:03:48",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 37,
        "submissionId": 43,
        "pathogenId": 6,
        "createdAt": "2023-07-24 16:51:56",
        "updatedAt": "2023-10-23 17:03:49",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 38,
        "submissionId": 995,
        "pathogenId": 5,
        "createdAt": "2023-07-24 18:28:00",
        "updatedAt": "2023-10-23 17:51:53",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 39,
        "submissionId": 995,
        "pathogenId": 6,
        "createdAt": "2023-07-24 18:28:00",
        "updatedAt": "2023-10-23 17:51:55",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 40,
        "submissionId": 1018,
        "pathogenId": 5,
        "createdAt": "2023-07-24 18:59:52",
        "updatedAt": "2023-10-23 17:54:49",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 41,
        "submissionId": 1018,
        "pathogenId": 6,
        "createdAt": "2023-07-24 18:59:52",
        "updatedAt": "2023-10-23 17:54:50",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 42,
        "submissionId": 969,
        "pathogenId": 1,
        "createdAt": "2023-07-25 17:41:39",
        "updatedAt": "2023-10-23 16:15:02",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 43,
        "submissionId": 969,
        "pathogenId": 3,
        "createdAt": "2023-07-25 17:41:39",
        "updatedAt": "2023-10-23 16:15:21",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 44,
        "submissionId": 969,
        "pathogenId": 4,
        "createdAt": "2023-07-25 17:41:39",
        "updatedAt": "2023-10-23 16:15:36",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 45,
        "submissionId": 969,
        "pathogenId": 11,
        "createdAt": "2023-07-25 17:41:39",
        "updatedAt": "2023-07-25 17:41:39",
        "deletedAt": "2023-10-06 21:30:20",
        "result": "pending"
      },
      {
        "id": 46,
        "submissionId": 969,
        "pathogenId": 12,
        "createdAt": "2023-07-25 17:41:39",
        "updatedAt": "2023-07-25 17:41:39",
        "deletedAt": "2023-10-06 21:30:20",
        "result": "pending"
      },
      {
        "id": 47,
        "submissionId": 1046,
        "pathogenId": 1,
        "createdAt": "2023-07-31 16:42:22",
        "updatedAt": "2023-10-23 16:24:11",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 48,
        "submissionId": 1046,
        "pathogenId": 3,
        "createdAt": "2023-07-31 16:42:22",
        "updatedAt": "2023-10-23 16:24:13",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 49,
        "submissionId": 1046,
        "pathogenId": 4,
        "createdAt": "2023-07-31 16:42:22",
        "updatedAt": "2023-10-23 16:24:15",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 50,
        "submissionId": 1046,
        "pathogenId": 11,
        "createdAt": "2023-07-31 16:42:22",
        "updatedAt": "2023-07-31 16:42:22",
        "deletedAt": "2023-10-06 21:32:41",
        "result": "pending"
      },
      {
        "id": 51,
        "submissionId": 1046,
        "pathogenId": 12,
        "createdAt": "2023-07-31 16:42:22",
        "updatedAt": "2023-07-31 16:42:22",
        "deletedAt": "2023-10-06 21:32:41",
        "result": "pending"
      },
      {
        "id": 52,
        "submissionId": 1010,
        "pathogenId": 5,
        "createdAt": "2023-07-31 16:57:06",
        "updatedAt": "2023-10-23 17:35:44",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 53,
        "submissionId": 1010,
        "pathogenId": 6,
        "createdAt": "2023-07-31 16:57:06",
        "updatedAt": "2023-10-23 17:35:45",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 54,
        "submissionId": 993,
        "pathogenId": 5,
        "createdAt": "2023-07-31 16:57:28",
        "updatedAt": "2023-10-23 17:51:29",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 55,
        "submissionId": 993,
        "pathogenId": 6,
        "createdAt": "2023-07-31 16:57:28",
        "updatedAt": "2023-10-23 17:51:30",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 56,
        "submissionId": 1036,
        "pathogenId": 1,
        "createdAt": "2023-07-31 17:08:35",
        "updatedAt": "2023-10-23 16:22:03",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 57,
        "submissionId": 1036,
        "pathogenId": 3,
        "createdAt": "2023-07-31 17:08:35",
        "updatedAt": "2023-10-23 16:22:05",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 58,
        "submissionId": 1036,
        "pathogenId": 4,
        "createdAt": "2023-07-31 17:08:35",
        "updatedAt": "2023-10-23 16:22:07",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 59,
        "submissionId": 1036,
        "pathogenId": 11,
        "createdAt": "2023-07-31 17:08:35",
        "updatedAt": "2023-07-31 17:08:35",
        "deletedAt": "2023-10-06 21:32:09",
        "result": "pending"
      },
      {
        "id": 60,
        "submissionId": 1036,
        "pathogenId": 12,
        "createdAt": "2023-07-31 17:08:35",
        "updatedAt": "2023-07-31 17:08:35",
        "deletedAt": "2023-10-06 21:32:09",
        "result": "pending"
      },
      {
        "id": 61,
        "submissionId": 989,
        "pathogenId": 1,
        "createdAt": "2023-07-31 17:12:56",
        "updatedAt": "2023-10-23 14:52:32",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 62,
        "submissionId": 989,
        "pathogenId": 3,
        "createdAt": "2023-07-31 17:12:56",
        "updatedAt": "2023-10-23 14:52:34",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 63,
        "submissionId": 989,
        "pathogenId": 4,
        "createdAt": "2023-07-31 17:12:56",
        "updatedAt": "2023-10-23 14:52:36",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 64,
        "submissionId": 989,
        "pathogenId": 11,
        "createdAt": "2023-07-31 17:12:56",
        "updatedAt": "2023-07-31 17:12:56",
        "deletedAt": "2023-10-06 21:31:24",
        "result": "pending"
      },
      {
        "id": 65,
        "submissionId": 989,
        "pathogenId": 12,
        "createdAt": "2023-07-31 17:12:56",
        "updatedAt": "2023-07-31 17:12:56",
        "deletedAt": "2023-10-06 21:31:24",
        "result": "pending"
      },
      {
        "id": 66,
        "submissionId": 1032,
        "pathogenId": 5,
        "createdAt": "2023-07-31 17:17:56",
        "updatedAt": "2023-10-23 17:36:14",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 67,
        "submissionId": 1032,
        "pathogenId": 6,
        "createdAt": "2023-07-31 17:17:56",
        "updatedAt": "2023-10-23 17:36:16",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 68,
        "submissionId": 999,
        "pathogenId": 5,
        "createdAt": "2023-08-08 19:25:11",
        "updatedAt": "2023-10-23 17:52:37",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 69,
        "submissionId": 999,
        "pathogenId": 6,
        "createdAt": "2023-08-08 19:25:11",
        "updatedAt": "2023-10-23 17:52:38",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 70,
        "submissionId": 992,
        "pathogenId": 5,
        "createdAt": "2023-08-08 19:32:43",
        "updatedAt": "2023-10-23 17:50:46",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 71,
        "submissionId": 992,
        "pathogenId": 6,
        "createdAt": "2023-08-08 19:32:43",
        "updatedAt": "2023-10-23 17:50:47",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 72,
        "submissionId": 1047,
        "pathogenId": 5,
        "createdAt": "2023-08-08 19:33:32",
        "updatedAt": "2023-10-23 17:37:10",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 73,
        "submissionId": 1047,
        "pathogenId": 6,
        "createdAt": "2023-08-08 19:33:32",
        "updatedAt": "2023-10-23 17:37:11",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 74,
        "submissionId": 1022,
        "pathogenId": 5,
        "createdAt": "2023-08-08 19:38:54",
        "updatedAt": "2023-10-23 17:55:19",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 75,
        "submissionId": 1022,
        "pathogenId": 6,
        "createdAt": "2023-08-08 19:38:54",
        "updatedAt": "2023-10-23 17:55:21",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 76,
        "submissionId": 1051,
        "pathogenId": 5,
        "createdAt": "2023-08-08 19:45:59",
        "updatedAt": "2023-10-23 17:58:12",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 77,
        "submissionId": 1051,
        "pathogenId": 6,
        "createdAt": "2023-08-08 19:45:59",
        "updatedAt": "2023-10-23 17:58:13",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 78,
        "submissionId": 1057,
        "pathogenId": 5,
        "createdAt": "2023-08-08 19:53:35",
        "updatedAt": "2023-10-23 17:59:34",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 79,
        "submissionId": 1057,
        "pathogenId": 6,
        "createdAt": "2023-08-08 19:53:35",
        "updatedAt": "2023-10-23 17:59:35",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 80,
        "submissionId": 1016,
        "pathogenId": 5,
        "createdAt": "2023-08-08 20:02:29",
        "updatedAt": "2023-10-23 17:53:51",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 81,
        "submissionId": 1016,
        "pathogenId": 6,
        "createdAt": "2023-08-08 20:02:29",
        "updatedAt": "2023-10-23 17:53:52",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 82,
        "submissionId": 1030,
        "pathogenId": 5,
        "createdAt": "2023-08-08 20:11:21",
        "updatedAt": "2023-10-23 17:56:53",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 83,
        "submissionId": 1030,
        "pathogenId": 6,
        "createdAt": "2023-08-08 20:11:21",
        "updatedAt": "2023-10-23 17:56:55",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 84,
        "submissionId": 1042,
        "pathogenId": 5,
        "createdAt": "2023-08-08 20:19:59",
        "updatedAt": "2023-10-23 17:57:40",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 85,
        "submissionId": 1042,
        "pathogenId": 6,
        "createdAt": "2023-08-08 20:19:59",
        "updatedAt": "2023-10-23 17:57:41",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 86,
        "submissionId": 310,
        "pathogenId": 1,
        "createdAt": "2023-08-08 22:46:45",
        "updatedAt": "2023-10-05 20:09:11",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "positive"
      },
      {
        "id": 87,
        "submissionId": 310,
        "pathogenId": 3,
        "createdAt": "2023-08-08 22:46:45",
        "updatedAt": "2023-10-05 20:09:23",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "positive"
      },
      {
        "id": 88,
        "submissionId": 310,
        "pathogenId": 4,
        "createdAt": "2023-08-08 22:46:45",
        "updatedAt": "2023-10-05 20:09:29",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "positive"
      },
      {
        "id": 89,
        "submissionId": 310,
        "pathogenId": 11,
        "createdAt": "2023-08-08 22:46:45",
        "updatedAt": "2023-08-08 22:46:45",
        "deletedAt": "2023-09-29 22:28:30",
        "result": "pending"
      },
      {
        "id": 90,
        "submissionId": 310,
        "pathogenId": 12,
        "createdAt": "2023-08-08 22:46:45",
        "updatedAt": "2023-08-08 22:46:45",
        "deletedAt": "2023-09-29 22:28:30",
        "result": "pending"
      },
      {
        "id": 91,
        "submissionId": 474,
        "pathogenId": 1,
        "createdAt": "2023-08-08 22:48:22",
        "updatedAt": "2023-08-08 22:48:37",
        "deletedAt": null,
        "result": "positive"
      },
      {
        "id": 92,
        "submissionId": 474,
        "pathogenId": 3,
        "createdAt": "2023-08-08 22:48:22",
        "updatedAt": "2023-08-17 15:41:09",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 93,
        "submissionId": 474,
        "pathogenId": 4,
        "createdAt": "2023-08-08 22:48:22",
        "updatedAt": "2023-08-17 15:41:10",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 94,
        "submissionId": 474,
        "pathogenId": 11,
        "createdAt": "2023-08-08 22:48:22",
        "updatedAt": "2023-08-08 22:48:22",
        "deletedAt": "2023-10-02 16:26:33",
        "result": "pending"
      },
      {
        "id": 95,
        "submissionId": 474,
        "pathogenId": 12,
        "createdAt": "2023-08-08 22:48:22",
        "updatedAt": "2023-08-08 22:48:22",
        "deletedAt": "2023-10-02 16:26:33",
        "result": "pending"
      },
      {
        "id": 96,
        "submissionId": 476,
        "pathogenId": 1,
        "createdAt": "2023-08-08 22:50:13",
        "updatedAt": "2023-08-08 22:50:27",
        "deletedAt": null,
        "result": "positive"
      },
      {
        "id": 97,
        "submissionId": 476,
        "pathogenId": 3,
        "createdAt": "2023-08-08 22:50:13",
        "updatedAt": "2023-08-17 15:42:20",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 98,
        "submissionId": 476,
        "pathogenId": 4,
        "createdAt": "2023-08-08 22:50:13",
        "updatedAt": "2023-08-17 15:42:22",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 99,
        "submissionId": 476,
        "pathogenId": 11,
        "createdAt": "2023-08-08 22:50:13",
        "updatedAt": "2023-08-08 22:50:13",
        "deletedAt": "2023-10-02 16:26:49",
        "result": "pending"
      },
      {
        "id": 100,
        "submissionId": 476,
        "pathogenId": 12,
        "createdAt": "2023-08-08 22:50:13",
        "updatedAt": "2023-08-08 22:50:13",
        "deletedAt": "2023-10-02 16:26:49",
        "result": "pending"
      },
      {
        "id": 101,
        "submissionId": 471,
        "pathogenId": 1,
        "createdAt": "2023-08-10 14:23:58",
        "updatedAt": "2023-08-17 15:38:48",
        "deletedAt": null,
        "result": "positive"
      },
      {
        "id": 102,
        "submissionId": 471,
        "pathogenId": 3,
        "createdAt": "2023-08-10 14:23:58",
        "updatedAt": "2023-08-17 15:38:58",
        "deletedAt": null,
        "result": "inconclusive"
      },
      {
        "id": 103,
        "submissionId": 471,
        "pathogenId": 4,
        "createdAt": "2023-08-10 14:23:58",
        "updatedAt": "2023-08-17 15:39:02",
        "deletedAt": null,
        "result": "positive"
      },
      {
        "id": 104,
        "submissionId": 471,
        "pathogenId": 11,
        "createdAt": "2023-08-10 14:23:58",
        "updatedAt": "2023-08-10 14:23:58",
        "deletedAt": "2023-10-02 16:25:41",
        "result": "pending"
      },
      {
        "id": 105,
        "submissionId": 471,
        "pathogenId": 12,
        "createdAt": "2023-08-10 14:23:58",
        "updatedAt": "2023-08-10 14:23:58",
        "deletedAt": "2023-10-02 16:25:41",
        "result": "pending"
      },
      {
        "id": 106,
        "submissionId": 1028,
        "pathogenId": 5,
        "createdAt": "2023-08-10 22:01:46",
        "updatedAt": "2023-10-23 17:56:11",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 107,
        "submissionId": 1028,
        "pathogenId": 6,
        "createdAt": "2023-08-10 22:01:46",
        "updatedAt": "2023-10-23 17:56:13",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 108,
        "submissionId": 52,
        "pathogenId": 5,
        "createdAt": "2023-08-16 13:20:17",
        "updatedAt": "2023-10-23 17:04:52",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 109,
        "submissionId": 52,
        "pathogenId": 6,
        "createdAt": "2023-08-16 13:20:17",
        "updatedAt": "2023-10-23 17:04:53",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 110,
        "submissionId": 103,
        "pathogenId": 1,
        "createdAt": "2023-08-16 13:25:17",
        "updatedAt": "2023-08-16 13:25:17",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "pending"
      },
      {
        "id": 111,
        "submissionId": 103,
        "pathogenId": 3,
        "createdAt": "2023-08-16 13:25:17",
        "updatedAt": "2023-08-16 13:25:17",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "pending"
      },
      {
        "id": 112,
        "submissionId": 103,
        "pathogenId": 4,
        "createdAt": "2023-08-16 13:25:17",
        "updatedAt": "2023-08-16 13:25:17",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "pending"
      },
      {
        "id": 113,
        "submissionId": 103,
        "pathogenId": 11,
        "createdAt": "2023-08-16 13:25:17",
        "updatedAt": "2023-08-16 13:25:17",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "pending"
      },
      {
        "id": 114,
        "submissionId": 103,
        "pathogenId": 12,
        "createdAt": "2023-08-16 13:25:17",
        "updatedAt": "2023-08-16 13:25:17",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "pending"
      },
      {
        "id": 115,
        "submissionId": 185,
        "pathogenId": 1,
        "createdAt": "2023-08-16 13:37:36",
        "updatedAt": "2023-08-16 13:37:36",
        "deletedAt": "2023-10-02 20:03:21",
        "result": "pending"
      },
      {
        "id": 116,
        "submissionId": 185,
        "pathogenId": 3,
        "createdAt": "2023-08-16 13:37:36",
        "updatedAt": "2023-08-16 13:37:36",
        "deletedAt": "2023-10-02 20:03:21",
        "result": "pending"
      },
      {
        "id": 117,
        "submissionId": 185,
        "pathogenId": 4,
        "createdAt": "2023-08-16 13:37:36",
        "updatedAt": "2023-08-16 13:37:36",
        "deletedAt": "2023-10-02 20:03:21",
        "result": "pending"
      },
      {
        "id": 118,
        "submissionId": 185,
        "pathogenId": 11,
        "createdAt": "2023-08-16 13:37:36",
        "updatedAt": "2023-08-16 13:37:36",
        "deletedAt": "2023-10-02 20:03:21",
        "result": "pending"
      },
      {
        "id": 119,
        "submissionId": 185,
        "pathogenId": 12,
        "createdAt": "2023-08-16 13:37:36",
        "updatedAt": "2023-08-16 13:37:36",
        "deletedAt": "2023-10-02 20:03:21",
        "result": "pending"
      },
      {
        "id": 120,
        "submissionId": 448,
        "pathogenId": 5,
        "createdAt": "2023-08-16 13:41:56",
        "updatedAt": "2023-10-23 17:27:35",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 121,
        "submissionId": 448,
        "pathogenId": 6,
        "createdAt": "2023-08-16 13:41:56",
        "updatedAt": "2023-10-23 17:27:37",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 122,
        "submissionId": 458,
        "pathogenId": 1,
        "createdAt": "2023-08-16 13:47:02",
        "updatedAt": "2023-09-29 14:32:12",
        "deletedAt": null,
        "result": "positive"
      },
      {
        "id": 123,
        "submissionId": 458,
        "pathogenId": 3,
        "createdAt": "2023-08-16 13:47:02",
        "updatedAt": "2023-09-29 14:32:18",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 124,
        "submissionId": 458,
        "pathogenId": 4,
        "createdAt": "2023-08-16 13:47:02",
        "updatedAt": "2023-09-29 14:32:26",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 125,
        "submissionId": 458,
        "pathogenId": 11,
        "createdAt": "2023-08-16 13:47:02",
        "updatedAt": "2023-08-16 13:47:02",
        "deletedAt": "2023-10-02 16:25:06",
        "result": "pending"
      },
      {
        "id": 126,
        "submissionId": 458,
        "pathogenId": 12,
        "createdAt": "2023-08-16 13:47:02",
        "updatedAt": "2023-08-16 13:47:02",
        "deletedAt": "2023-10-02 16:25:06",
        "result": "pending"
      },
      {
        "id": 127,
        "submissionId": 460,
        "pathogenId": 1,
        "createdAt": "2023-08-16 13:47:47",
        "updatedAt": "2023-10-23 14:40:25",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 128,
        "submissionId": 460,
        "pathogenId": 3,
        "createdAt": "2023-08-16 13:47:47",
        "updatedAt": "2023-10-23 14:40:30",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 129,
        "submissionId": 460,
        "pathogenId": 4,
        "createdAt": "2023-08-16 13:47:47",
        "updatedAt": "2023-10-23 14:40:44",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 130,
        "submissionId": 460,
        "pathogenId": 11,
        "createdAt": "2023-08-16 13:47:47",
        "updatedAt": "2023-08-16 13:47:47",
        "deletedAt": "2023-10-02 16:25:14",
        "result": "pending"
      },
      {
        "id": 131,
        "submissionId": 460,
        "pathogenId": 12,
        "createdAt": "2023-08-16 13:47:47",
        "updatedAt": "2023-08-16 13:47:47",
        "deletedAt": "2023-10-02 16:25:14",
        "result": "pending"
      },
      {
        "id": 132,
        "submissionId": 493,
        "pathogenId": 1,
        "createdAt": "2023-08-16 13:50:23",
        "updatedAt": "2023-10-23 15:58:37",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 133,
        "submissionId": 493,
        "pathogenId": 3,
        "createdAt": "2023-08-16 13:50:23",
        "updatedAt": "2023-10-23 15:59:49",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 134,
        "submissionId": 493,
        "pathogenId": 4,
        "createdAt": "2023-08-16 13:50:23",
        "updatedAt": "2023-10-23 15:59:47",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 135,
        "submissionId": 493,
        "pathogenId": 11,
        "createdAt": "2023-08-16 13:50:23",
        "updatedAt": "2023-08-16 13:50:23",
        "deletedAt": "2023-10-06 21:29:02",
        "result": "pending"
      },
      {
        "id": 136,
        "submissionId": 493,
        "pathogenId": 12,
        "createdAt": "2023-08-16 13:50:23",
        "updatedAt": "2023-08-16 13:50:23",
        "deletedAt": "2023-10-06 21:29:02",
        "result": "pending"
      },
      {
        "id": 137,
        "submissionId": 770,
        "pathogenId": 5,
        "createdAt": "2023-08-16 19:08:23",
        "updatedAt": "2023-10-23 17:29:10",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 138,
        "submissionId": 770,
        "pathogenId": 6,
        "createdAt": "2023-08-16 19:08:23",
        "updatedAt": "2023-10-23 17:29:12",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 139,
        "submissionId": 70,
        "pathogenId": 1,
        "createdAt": "2023-08-17 15:33:51",
        "updatedAt": "2023-10-10 10:57:20",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 140,
        "submissionId": 70,
        "pathogenId": 3,
        "createdAt": "2023-08-17 15:33:51",
        "updatedAt": "2023-10-10 10:57:22",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 141,
        "submissionId": 70,
        "pathogenId": 4,
        "createdAt": "2023-08-17 15:33:51",
        "updatedAt": "2023-10-10 10:57:24",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 142,
        "submissionId": 70,
        "pathogenId": 11,
        "createdAt": "2023-08-17 15:33:51",
        "updatedAt": "2023-08-17 15:33:51",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "pending"
      },
      {
        "id": 143,
        "submissionId": 70,
        "pathogenId": 12,
        "createdAt": "2023-08-17 15:33:51",
        "updatedAt": "2023-08-17 15:33:51",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "pending"
      },
      {
        "id": 144,
        "submissionId": 76,
        "pathogenId": 1,
        "createdAt": "2023-08-17 15:34:14",
        "updatedAt": "2023-08-17 15:34:29",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 145,
        "submissionId": 76,
        "pathogenId": 3,
        "createdAt": "2023-08-17 15:34:14",
        "updatedAt": "2023-08-17 15:34:31",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 146,
        "submissionId": 76,
        "pathogenId": 4,
        "createdAt": "2023-08-17 15:34:14",
        "updatedAt": "2023-08-17 15:34:57",
        "deletedAt": null,
        "result": "inconclusive"
      },
      {
        "id": 147,
        "submissionId": 76,
        "pathogenId": 11,
        "createdAt": "2023-08-17 15:34:14",
        "updatedAt": "2023-08-17 15:34:14",
        "deletedAt": "2023-10-02 16:24:16",
        "result": "pending"
      },
      {
        "id": 148,
        "submissionId": 76,
        "pathogenId": 12,
        "createdAt": "2023-08-17 15:34:14",
        "updatedAt": "2023-08-17 15:34:14",
        "deletedAt": "2023-10-02 16:24:16",
        "result": "pending"
      },
      {
        "id": 149,
        "submissionId": 309,
        "pathogenId": 1,
        "createdAt": "2023-08-17 15:35:12",
        "updatedAt": "2023-08-17 15:35:23",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 150,
        "submissionId": 309,
        "pathogenId": 3,
        "createdAt": "2023-08-17 15:35:12",
        "updatedAt": "2023-08-17 15:35:24",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 151,
        "submissionId": 309,
        "pathogenId": 4,
        "createdAt": "2023-08-17 15:35:12",
        "updatedAt": "2023-08-17 15:35:26",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 152,
        "submissionId": 309,
        "pathogenId": 11,
        "createdAt": "2023-08-17 15:35:12",
        "updatedAt": "2023-08-17 15:35:12",
        "deletedAt": "2023-10-02 16:24:30",
        "result": "pending"
      },
      {
        "id": 153,
        "submissionId": 309,
        "pathogenId": 12,
        "createdAt": "2023-08-17 15:35:12",
        "updatedAt": "2023-08-17 15:35:12",
        "deletedAt": "2023-10-02 16:24:30",
        "result": "pending"
      },
      {
        "id": 154,
        "submissionId": 461,
        "pathogenId": 1,
        "createdAt": "2023-08-17 15:36:07",
        "updatedAt": "2023-08-17 15:36:20",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 155,
        "submissionId": 461,
        "pathogenId": 3,
        "createdAt": "2023-08-17 15:36:07",
        "updatedAt": "2023-08-17 15:36:26",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 156,
        "submissionId": 461,
        "pathogenId": 4,
        "createdAt": "2023-08-17 15:36:07",
        "updatedAt": "2023-08-17 15:36:39",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 157,
        "submissionId": 461,
        "pathogenId": 11,
        "createdAt": "2023-08-17 15:36:07",
        "updatedAt": "2023-08-17 15:36:07",
        "deletedAt": "2023-10-02 16:24:48",
        "result": "pending"
      },
      {
        "id": 158,
        "submissionId": 461,
        "pathogenId": 12,
        "createdAt": "2023-08-17 15:36:07",
        "updatedAt": "2023-08-17 15:36:07",
        "deletedAt": "2023-10-02 16:24:48",
        "result": "pending"
      },
      {
        "id": 159,
        "submissionId": 463,
        "pathogenId": 1,
        "createdAt": "2023-08-17 15:37:02",
        "updatedAt": "2023-08-17 15:37:10",
        "deletedAt": null,
        "result": "positive"
      },
      {
        "id": 160,
        "submissionId": 463,
        "pathogenId": 3,
        "createdAt": "2023-08-17 15:37:02",
        "updatedAt": "2023-08-17 15:37:18",
        "deletedAt": null,
        "result": "positive"
      },
      {
        "id": 161,
        "submissionId": 463,
        "pathogenId": 4,
        "createdAt": "2023-08-17 15:37:02",
        "updatedAt": "2023-08-17 15:37:23",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 162,
        "submissionId": 463,
        "pathogenId": 11,
        "createdAt": "2023-08-17 15:37:02",
        "updatedAt": "2023-08-17 15:37:02",
        "deletedAt": "2023-10-02 16:24:57",
        "result": "pending"
      },
      {
        "id": 163,
        "submissionId": 463,
        "pathogenId": 12,
        "createdAt": "2023-08-17 15:37:02",
        "updatedAt": "2023-08-17 15:37:02",
        "deletedAt": "2023-10-02 16:24:57",
        "result": "pending"
      },
      {
        "id": 164,
        "submissionId": 464,
        "pathogenId": 1,
        "createdAt": "2023-08-17 15:37:32",
        "updatedAt": "2023-08-17 15:37:39",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 165,
        "submissionId": 464,
        "pathogenId": 3,
        "createdAt": "2023-08-17 15:37:32",
        "updatedAt": "2023-08-17 15:37:42",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 166,
        "submissionId": 464,
        "pathogenId": 4,
        "createdAt": "2023-08-17 15:37:32",
        "updatedAt": "2023-08-17 15:37:44",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 167,
        "submissionId": 464,
        "pathogenId": 11,
        "createdAt": "2023-08-17 15:37:32",
        "updatedAt": "2023-08-17 15:37:32",
        "deletedAt": "2023-10-02 16:25:21",
        "result": "pending"
      },
      {
        "id": 168,
        "submissionId": 464,
        "pathogenId": 12,
        "createdAt": "2023-08-17 15:37:32",
        "updatedAt": "2023-08-17 15:37:32",
        "deletedAt": "2023-10-02 16:25:21",
        "result": "pending"
      },
      {
        "id": 169,
        "submissionId": 468,
        "pathogenId": 1,
        "createdAt": "2023-08-17 15:38:02",
        "updatedAt": "2023-08-17 15:38:10",
        "deletedAt": null,
        "result": "positive"
      },
      {
        "id": 170,
        "submissionId": 468,
        "pathogenId": 3,
        "createdAt": "2023-08-17 15:38:02",
        "updatedAt": "2023-08-17 15:38:24",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 171,
        "submissionId": 468,
        "pathogenId": 4,
        "createdAt": "2023-08-17 15:38:02",
        "updatedAt": "2023-08-17 15:38:26",
        "deletedAt": null,
        "result": "inconclusive"
      },
      {
        "id": 172,
        "submissionId": 468,
        "pathogenId": 11,
        "createdAt": "2023-08-17 15:38:02",
        "updatedAt": "2023-08-17 15:38:02",
        "deletedAt": "2023-10-02 16:25:29",
        "result": "pending"
      },
      {
        "id": 173,
        "submissionId": 468,
        "pathogenId": 12,
        "createdAt": "2023-08-17 15:38:02",
        "updatedAt": "2023-08-17 15:38:02",
        "deletedAt": "2023-10-02 16:25:29",
        "result": "pending"
      },
      {
        "id": 174,
        "submissionId": 472,
        "pathogenId": 1,
        "createdAt": "2023-08-17 15:39:24",
        "updatedAt": "2023-08-17 15:39:36",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 175,
        "submissionId": 472,
        "pathogenId": 3,
        "createdAt": "2023-08-17 15:39:24",
        "updatedAt": "2023-08-17 15:39:38",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 176,
        "submissionId": 472,
        "pathogenId": 4,
        "createdAt": "2023-08-17 15:39:24",
        "updatedAt": "2023-08-17 15:39:39",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 177,
        "submissionId": 472,
        "pathogenId": 11,
        "createdAt": "2023-08-17 15:39:24",
        "updatedAt": "2023-08-17 15:39:24",
        "deletedAt": "2023-10-02 16:25:48",
        "result": "pending"
      },
      {
        "id": 178,
        "submissionId": 472,
        "pathogenId": 12,
        "createdAt": "2023-08-17 15:39:24",
        "updatedAt": "2023-08-17 15:39:24",
        "deletedAt": "2023-10-02 16:25:48",
        "result": "pending"
      },
      {
        "id": 179,
        "submissionId": 473,
        "pathogenId": 1,
        "createdAt": "2023-08-17 15:39:49",
        "updatedAt": "2023-08-17 15:39:57",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 180,
        "submissionId": 473,
        "pathogenId": 3,
        "createdAt": "2023-08-17 15:39:49",
        "updatedAt": "2023-08-17 15:39:59",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 181,
        "submissionId": 473,
        "pathogenId": 4,
        "createdAt": "2023-08-17 15:39:49",
        "updatedAt": "2023-08-17 15:40:00",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 182,
        "submissionId": 473,
        "pathogenId": 11,
        "createdAt": "2023-08-17 15:39:49",
        "updatedAt": "2023-08-17 15:39:49",
        "deletedAt": "2023-10-02 16:26:18",
        "result": "pending"
      },
      {
        "id": 183,
        "submissionId": 473,
        "pathogenId": 12,
        "createdAt": "2023-08-17 15:39:49",
        "updatedAt": "2023-08-17 15:39:49",
        "deletedAt": "2023-10-02 16:26:18",
        "result": "pending"
      },
      {
        "id": 184,
        "submissionId": 475,
        "pathogenId": 1,
        "createdAt": "2023-08-17 15:41:41",
        "updatedAt": "2023-08-17 15:41:47",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 185,
        "submissionId": 475,
        "pathogenId": 3,
        "createdAt": "2023-08-17 15:41:41",
        "updatedAt": "2023-08-17 15:41:49",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 186,
        "submissionId": 475,
        "pathogenId": 4,
        "createdAt": "2023-08-17 15:41:41",
        "updatedAt": "2023-08-17 15:41:50",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 187,
        "submissionId": 475,
        "pathogenId": 11,
        "createdAt": "2023-08-17 15:41:41",
        "updatedAt": "2023-08-17 15:41:41",
        "deletedAt": "2023-10-02 16:26:43",
        "result": "pending"
      },
      {
        "id": 188,
        "submissionId": 475,
        "pathogenId": 12,
        "createdAt": "2023-08-17 15:41:41",
        "updatedAt": "2023-08-17 15:41:41",
        "deletedAt": "2023-10-02 16:26:43",
        "result": "pending"
      },
      {
        "id": 189,
        "submissionId": 477,
        "pathogenId": 1,
        "createdAt": "2023-08-17 15:42:36",
        "updatedAt": "2023-08-17 15:42:53",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 190,
        "submissionId": 477,
        "pathogenId": 3,
        "createdAt": "2023-08-17 15:42:36",
        "updatedAt": "2023-08-17 15:42:54",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 191,
        "submissionId": 477,
        "pathogenId": 4,
        "createdAt": "2023-08-17 15:42:36",
        "updatedAt": "2023-08-17 15:42:56",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 192,
        "submissionId": 477,
        "pathogenId": 11,
        "createdAt": "2023-08-17 15:42:36",
        "updatedAt": "2023-08-17 15:42:36",
        "deletedAt": "2023-10-02 16:27:09",
        "result": "pending"
      },
      {
        "id": 193,
        "submissionId": 477,
        "pathogenId": 12,
        "createdAt": "2023-08-17 15:42:36",
        "updatedAt": "2023-08-17 15:42:36",
        "deletedAt": "2023-10-02 16:27:09",
        "result": "pending"
      },
      {
        "id": 194,
        "submissionId": 481,
        "pathogenId": 1,
        "createdAt": "2023-08-17 15:43:32",
        "updatedAt": "2023-08-17 15:43:40",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 195,
        "submissionId": 481,
        "pathogenId": 3,
        "createdAt": "2023-08-17 15:43:32",
        "updatedAt": "2023-08-17 15:43:42",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 196,
        "submissionId": 481,
        "pathogenId": 4,
        "createdAt": "2023-08-17 15:43:32",
        "updatedAt": "2023-08-17 15:43:43",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 197,
        "submissionId": 481,
        "pathogenId": 11,
        "createdAt": "2023-08-17 15:43:32",
        "updatedAt": "2023-08-17 15:43:32",
        "deletedAt": "2023-10-02 16:27:17",
        "result": "pending"
      },
      {
        "id": 198,
        "submissionId": 481,
        "pathogenId": 12,
        "createdAt": "2023-08-17 15:43:32",
        "updatedAt": "2023-08-17 15:43:32",
        "deletedAt": "2023-10-02 16:27:17",
        "result": "pending"
      },
      {
        "id": 199,
        "submissionId": 488,
        "pathogenId": 1,
        "createdAt": "2023-08-17 15:44:11",
        "updatedAt": "2023-08-17 15:44:23",
        "deletedAt": null,
        "result": "positive"
      },
      {
        "id": 200,
        "submissionId": 488,
        "pathogenId": 3,
        "createdAt": "2023-08-17 15:44:11",
        "updatedAt": "2023-08-17 15:44:26",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 201,
        "submissionId": 488,
        "pathogenId": 4,
        "createdAt": "2023-08-17 15:44:11",
        "updatedAt": "2023-08-17 15:44:27",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 202,
        "submissionId": 488,
        "pathogenId": 11,
        "createdAt": "2023-08-17 15:44:11",
        "updatedAt": "2023-08-17 15:44:11",
        "deletedAt": "2023-10-02 16:27:23",
        "result": "pending"
      },
      {
        "id": 203,
        "submissionId": 488,
        "pathogenId": 12,
        "createdAt": "2023-08-17 15:44:11",
        "updatedAt": "2023-08-17 15:44:11",
        "deletedAt": "2023-10-02 16:27:23",
        "result": "pending"
      },
      {
        "id": 204,
        "submissionId": 491,
        "pathogenId": 1,
        "createdAt": "2023-08-17 15:45:02",
        "updatedAt": "2023-08-17 15:45:16",
        "deletedAt": null,
        "result": "positive"
      },
      {
        "id": 205,
        "submissionId": 491,
        "pathogenId": 3,
        "createdAt": "2023-08-17 15:45:02",
        "updatedAt": "2023-08-17 15:45:18",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 206,
        "submissionId": 491,
        "pathogenId": 4,
        "createdAt": "2023-08-17 15:45:02",
        "updatedAt": "2023-08-17 15:45:19",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 207,
        "submissionId": 491,
        "pathogenId": 11,
        "createdAt": "2023-08-17 15:45:02",
        "updatedAt": "2023-08-17 15:45:02",
        "deletedAt": "2023-10-02 16:27:33",
        "result": "pending"
      },
      {
        "id": 208,
        "submissionId": 491,
        "pathogenId": 12,
        "createdAt": "2023-08-17 15:45:02",
        "updatedAt": "2023-08-17 15:45:02",
        "deletedAt": "2023-10-02 16:27:33",
        "result": "pending"
      },
      {
        "id": 209,
        "submissionId": 492,
        "pathogenId": 1,
        "createdAt": "2023-08-17 15:45:37",
        "updatedAt": "2023-08-17 15:45:49",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 210,
        "submissionId": 492,
        "pathogenId": 3,
        "createdAt": "2023-08-17 15:45:37",
        "updatedAt": "2023-08-17 15:45:50",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 211,
        "submissionId": 492,
        "pathogenId": 4,
        "createdAt": "2023-08-17 15:45:37",
        "updatedAt": "2023-08-17 15:45:51",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 212,
        "submissionId": 492,
        "pathogenId": 11,
        "createdAt": "2023-08-17 15:45:37",
        "updatedAt": "2023-08-17 15:45:37",
        "deletedAt": "2023-10-02 16:27:39",
        "result": "pending"
      },
      {
        "id": 213,
        "submissionId": 492,
        "pathogenId": 12,
        "createdAt": "2023-08-17 15:45:37",
        "updatedAt": "2023-08-17 15:45:37",
        "deletedAt": "2023-10-02 16:27:39",
        "result": "pending"
      },
      {
        "id": 214,
        "submissionId": 495,
        "pathogenId": 1,
        "createdAt": "2023-08-17 15:46:05",
        "updatedAt": "2023-08-17 15:46:12",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 215,
        "submissionId": 495,
        "pathogenId": 3,
        "createdAt": "2023-08-17 15:46:05",
        "updatedAt": "2023-08-17 15:46:16",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 216,
        "submissionId": 495,
        "pathogenId": 4,
        "createdAt": "2023-08-17 15:46:05",
        "updatedAt": "2023-08-17 15:46:19",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 217,
        "submissionId": 495,
        "pathogenId": 11,
        "createdAt": "2023-08-17 15:46:05",
        "updatedAt": "2023-08-17 15:46:05",
        "deletedAt": "2023-10-02 16:27:46",
        "result": "pending"
      },
      {
        "id": 218,
        "submissionId": 495,
        "pathogenId": 12,
        "createdAt": "2023-08-17 15:46:05",
        "updatedAt": "2023-08-17 15:46:05",
        "deletedAt": "2023-10-02 16:27:46",
        "result": "pending"
      },
      {
        "id": 219,
        "submissionId": 496,
        "pathogenId": 1,
        "createdAt": "2023-08-17 15:46:59",
        "updatedAt": "2023-08-17 15:47:10",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 220,
        "submissionId": 496,
        "pathogenId": 3,
        "createdAt": "2023-08-17 15:46:59",
        "updatedAt": "2023-08-17 15:47:12",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 221,
        "submissionId": 496,
        "pathogenId": 4,
        "createdAt": "2023-08-17 15:46:59",
        "updatedAt": "2023-08-17 15:47:14",
        "deletedAt": null,
        "result": "positive"
      },
      {
        "id": 222,
        "submissionId": 496,
        "pathogenId": 11,
        "createdAt": "2023-08-17 15:46:59",
        "updatedAt": "2023-08-17 15:46:59",
        "deletedAt": "2023-10-02 16:27:53",
        "result": "pending"
      },
      {
        "id": 223,
        "submissionId": 496,
        "pathogenId": 12,
        "createdAt": "2023-08-17 15:46:59",
        "updatedAt": "2023-08-17 15:46:59",
        "deletedAt": "2023-10-02 16:27:53",
        "result": "pending"
      },
      {
        "id": 224,
        "submissionId": 497,
        "pathogenId": 1,
        "createdAt": "2023-08-17 15:47:45",
        "updatedAt": "2023-08-17 15:48:06",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 225,
        "submissionId": 497,
        "pathogenId": 3,
        "createdAt": "2023-08-17 15:47:45",
        "updatedAt": "2023-08-17 15:48:08",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 226,
        "submissionId": 497,
        "pathogenId": 4,
        "createdAt": "2023-08-17 15:47:45",
        "updatedAt": "2023-08-17 15:48:09",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 227,
        "submissionId": 497,
        "pathogenId": 11,
        "createdAt": "2023-08-17 15:47:45",
        "updatedAt": "2023-08-17 15:47:45",
        "deletedAt": "2023-10-02 16:28:07",
        "result": "pending"
      },
      {
        "id": 228,
        "submissionId": 497,
        "pathogenId": 12,
        "createdAt": "2023-08-17 15:47:45",
        "updatedAt": "2023-08-17 15:47:45",
        "deletedAt": "2023-10-02 16:28:07",
        "result": "pending"
      },
      {
        "id": 229,
        "submissionId": 503,
        "pathogenId": 1,
        "createdAt": "2023-08-17 15:48:22",
        "updatedAt": "2023-08-17 15:48:43",
        "deletedAt": null,
        "result": "positive"
      },
      {
        "id": 230,
        "submissionId": 503,
        "pathogenId": 3,
        "createdAt": "2023-08-17 15:48:22",
        "updatedAt": "2023-08-17 15:48:45",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 231,
        "submissionId": 503,
        "pathogenId": 4,
        "createdAt": "2023-08-17 15:48:22",
        "updatedAt": "2023-08-17 15:48:46",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 232,
        "submissionId": 503,
        "pathogenId": 11,
        "createdAt": "2023-08-17 15:48:22",
        "updatedAt": "2023-08-17 15:48:22",
        "deletedAt": "2023-10-02 16:28:14",
        "result": "pending"
      },
      {
        "id": 233,
        "submissionId": 503,
        "pathogenId": 12,
        "createdAt": "2023-08-17 15:48:22",
        "updatedAt": "2023-08-17 15:48:22",
        "deletedAt": "2023-10-02 16:28:14",
        "result": "pending"
      },
      {
        "id": 234,
        "submissionId": 632,
        "pathogenId": 1,
        "createdAt": "2023-08-17 15:49:01",
        "updatedAt": "2023-08-17 15:49:10",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 235,
        "submissionId": 632,
        "pathogenId": 3,
        "createdAt": "2023-08-17 15:49:01",
        "updatedAt": "2023-08-17 15:49:11",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 236,
        "submissionId": 632,
        "pathogenId": 4,
        "createdAt": "2023-08-17 15:49:01",
        "updatedAt": "2023-08-17 15:49:13",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 237,
        "submissionId": 632,
        "pathogenId": 11,
        "createdAt": "2023-08-17 15:49:01",
        "updatedAt": "2023-08-17 15:49:01",
        "deletedAt": "2023-10-02 16:28:21",
        "result": "pending"
      },
      {
        "id": 238,
        "submissionId": 632,
        "pathogenId": 12,
        "createdAt": "2023-08-17 15:49:01",
        "updatedAt": "2023-08-17 15:49:01",
        "deletedAt": "2023-10-02 16:28:21",
        "result": "pending"
      },
      {
        "id": 239,
        "submissionId": 738,
        "pathogenId": 1,
        "createdAt": "2023-08-17 15:50:44",
        "updatedAt": "2023-08-17 15:50:53",
        "deletedAt": null,
        "result": "positive"
      },
      {
        "id": 240,
        "submissionId": 738,
        "pathogenId": 3,
        "createdAt": "2023-08-17 15:50:44",
        "updatedAt": "2023-08-17 15:50:55",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 241,
        "submissionId": 738,
        "pathogenId": 4,
        "createdAt": "2023-08-17 15:50:44",
        "updatedAt": "2023-08-17 15:50:56",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 242,
        "submissionId": 738,
        "pathogenId": 11,
        "createdAt": "2023-08-17 15:50:44",
        "updatedAt": "2023-08-17 15:50:44",
        "deletedAt": "2023-10-02 16:28:36",
        "result": "pending"
      },
      {
        "id": 243,
        "submissionId": 738,
        "pathogenId": 12,
        "createdAt": "2023-08-17 15:50:44",
        "updatedAt": "2023-08-17 15:50:44",
        "deletedAt": "2023-10-02 16:28:36",
        "result": "pending"
      },
      {
        "id": 244,
        "submissionId": 837,
        "pathogenId": 1,
        "createdAt": "2023-08-17 15:51:23",
        "updatedAt": "2023-08-17 15:51:33",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 245,
        "submissionId": 837,
        "pathogenId": 3,
        "createdAt": "2023-08-17 15:51:23",
        "updatedAt": "2023-08-17 15:51:34",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 246,
        "submissionId": 837,
        "pathogenId": 4,
        "createdAt": "2023-08-17 15:51:23",
        "updatedAt": "2023-08-17 15:51:35",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 247,
        "submissionId": 837,
        "pathogenId": 11,
        "createdAt": "2023-08-17 15:51:23",
        "updatedAt": "2023-08-17 15:51:23",
        "deletedAt": "2023-10-02 16:28:43",
        "result": "pending"
      },
      {
        "id": 248,
        "submissionId": 837,
        "pathogenId": 12,
        "createdAt": "2023-08-17 15:51:23",
        "updatedAt": "2023-08-17 15:51:23",
        "deletedAt": "2023-10-02 16:28:43",
        "result": "pending"
      },
      {
        "id": 249,
        "submissionId": 880,
        "pathogenId": 1,
        "createdAt": "2023-08-17 15:52:02",
        "updatedAt": "2023-08-17 15:52:15",
        "deletedAt": null,
        "result": "positive"
      },
      {
        "id": 250,
        "submissionId": 880,
        "pathogenId": 3,
        "createdAt": "2023-08-17 15:52:02",
        "updatedAt": "2023-08-17 15:52:17",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 251,
        "submissionId": 880,
        "pathogenId": 4,
        "createdAt": "2023-08-17 15:52:02",
        "updatedAt": "2023-08-17 15:52:19",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 252,
        "submissionId": 880,
        "pathogenId": 11,
        "createdAt": "2023-08-17 15:52:02",
        "updatedAt": "2023-08-17 15:52:02",
        "deletedAt": "2023-10-02 16:28:52",
        "result": "pending"
      },
      {
        "id": 253,
        "submissionId": 880,
        "pathogenId": 12,
        "createdAt": "2023-08-17 15:52:02",
        "updatedAt": "2023-08-17 15:52:02",
        "deletedAt": "2023-10-02 16:28:52",
        "result": "pending"
      },
      {
        "id": 254,
        "submissionId": 1066,
        "pathogenId": 5,
        "createdAt": "2023-08-17 20:49:55",
        "updatedAt": "2023-10-23 18:00:13",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 255,
        "submissionId": 1066,
        "pathogenId": 6,
        "createdAt": "2023-08-17 20:49:55",
        "updatedAt": "2023-10-23 18:00:14",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 256,
        "submissionId": 1068,
        "pathogenId": 5,
        "createdAt": "2023-08-17 20:52:57",
        "updatedAt": "2023-10-23 18:00:53",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 257,
        "submissionId": 1068,
        "pathogenId": 6,
        "createdAt": "2023-08-17 20:52:57",
        "updatedAt": "2023-10-23 18:00:54",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 258,
        "submissionId": 1070,
        "pathogenId": 5,
        "createdAt": "2023-08-17 21:02:50",
        "updatedAt": "2023-10-23 18:01:52",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 259,
        "submissionId": 1070,
        "pathogenId": 6,
        "createdAt": "2023-08-17 21:02:50",
        "updatedAt": "2023-10-23 18:01:53",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 260,
        "submissionId": 1071,
        "pathogenId": 5,
        "createdAt": "2023-08-17 21:46:56",
        "updatedAt": "2023-10-23 18:02:20",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 261,
        "submissionId": 1071,
        "pathogenId": 6,
        "createdAt": "2023-08-17 21:46:56",
        "updatedAt": "2023-10-23 18:02:21",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 262,
        "submissionId": 1069,
        "pathogenId": 5,
        "createdAt": "2023-08-18 19:46:04",
        "updatedAt": "2023-10-23 18:01:27",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 263,
        "submissionId": 1069,
        "pathogenId": 6,
        "createdAt": "2023-08-18 19:46:04",
        "updatedAt": "2023-10-23 18:01:28",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 264,
        "submissionId": 1077,
        "pathogenId": 5,
        "createdAt": "2023-08-18 21:39:33",
        "updatedAt": "2023-08-18 21:39:33",
        "deletedAt": "2023-08-24 18:03:57",
        "result": "pending"
      },
      {
        "id": 265,
        "submissionId": 1077,
        "pathogenId": 6,
        "createdAt": "2023-08-18 21:39:33",
        "updatedAt": "2023-08-18 21:39:33",
        "deletedAt": "2023-08-24 18:03:57",
        "result": "pending"
      },
      {
        "id": 266,
        "submissionId": 980,
        "pathogenId": 1,
        "createdAt": "2023-08-19 01:04:56",
        "updatedAt": "2023-08-19 01:05:10",
        "deletedAt": null,
        "result": "positive"
      },
      {
        "id": 267,
        "submissionId": 980,
        "pathogenId": 3,
        "createdAt": "2023-08-19 01:04:56",
        "updatedAt": "2023-08-19 01:05:12",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 268,
        "submissionId": 980,
        "pathogenId": 4,
        "createdAt": "2023-08-19 01:04:56",
        "updatedAt": "2023-08-19 01:05:14",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 269,
        "submissionId": 980,
        "pathogenId": 11,
        "createdAt": "2023-08-19 01:04:56",
        "updatedAt": "2023-08-19 01:04:56",
        "deletedAt": "2023-10-02 16:29:00",
        "result": "pending"
      },
      {
        "id": 270,
        "submissionId": 980,
        "pathogenId": 12,
        "createdAt": "2023-08-19 01:04:56",
        "updatedAt": "2023-08-19 01:04:56",
        "deletedAt": "2023-10-02 16:29:00",
        "result": "pending"
      },
      {
        "id": 271,
        "submissionId": 986,
        "pathogenId": 1,
        "createdAt": "2023-08-19 01:05:48",
        "updatedAt": "2023-08-19 01:05:55",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 272,
        "submissionId": 986,
        "pathogenId": 3,
        "createdAt": "2023-08-19 01:05:48",
        "updatedAt": "2023-08-19 01:05:57",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 273,
        "submissionId": 986,
        "pathogenId": 4,
        "createdAt": "2023-08-19 01:05:48",
        "updatedAt": "2023-08-19 01:05:59",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 274,
        "submissionId": 986,
        "pathogenId": 11,
        "createdAt": "2023-08-19 01:05:48",
        "updatedAt": "2023-08-19 01:05:48",
        "deletedAt": "2023-10-02 16:29:07",
        "result": "pending"
      },
      {
        "id": 275,
        "submissionId": 986,
        "pathogenId": 12,
        "createdAt": "2023-08-19 01:05:48",
        "updatedAt": "2023-08-19 01:05:48",
        "deletedAt": "2023-10-02 16:29:07",
        "result": "pending"
      },
      {
        "id": 276,
        "submissionId": 994,
        "pathogenId": 1,
        "createdAt": "2023-08-19 01:06:10",
        "updatedAt": "2023-08-19 01:06:15",
        "deletedAt": null,
        "result": "positive"
      },
      {
        "id": 277,
        "submissionId": 994,
        "pathogenId": 3,
        "createdAt": "2023-08-19 01:06:10",
        "updatedAt": "2023-08-19 01:06:17",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 278,
        "submissionId": 994,
        "pathogenId": 4,
        "createdAt": "2023-08-19 01:06:10",
        "updatedAt": "2023-08-19 01:06:19",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 279,
        "submissionId": 994,
        "pathogenId": 11,
        "createdAt": "2023-08-19 01:06:10",
        "updatedAt": "2023-08-19 01:06:10",
        "deletedAt": "2023-10-02 16:29:14",
        "result": "pending"
      },
      {
        "id": 280,
        "submissionId": 994,
        "pathogenId": 12,
        "createdAt": "2023-08-19 01:06:10",
        "updatedAt": "2023-08-19 01:06:10",
        "deletedAt": "2023-10-02 16:29:14",
        "result": "pending"
      },
      {
        "id": 281,
        "submissionId": 56,
        "pathogenId": 5,
        "createdAt": "2023-08-19 01:07:37",
        "updatedAt": "2023-08-19 01:08:30",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 282,
        "submissionId": 56,
        "pathogenId": 6,
        "createdAt": "2023-08-19 01:07:37",
        "updatedAt": "2023-08-19 01:08:32",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 283,
        "submissionId": 165,
        "pathogenId": 5,
        "createdAt": "2023-08-19 01:09:25",
        "updatedAt": "2023-08-19 01:09:29",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 284,
        "submissionId": 165,
        "pathogenId": 6,
        "createdAt": "2023-08-19 01:09:25",
        "updatedAt": "2023-08-19 01:09:30",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 285,
        "submissionId": 278,
        "pathogenId": 5,
        "createdAt": "2023-08-19 01:09:43",
        "updatedAt": "2023-08-19 01:09:50",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 286,
        "submissionId": 278,
        "pathogenId": 6,
        "createdAt": "2023-08-19 01:09:43",
        "updatedAt": "2023-08-19 01:09:51",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 287,
        "submissionId": 301,
        "pathogenId": 5,
        "createdAt": "2023-08-19 01:10:10",
        "updatedAt": "2023-08-19 01:10:13",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 288,
        "submissionId": 301,
        "pathogenId": 6,
        "createdAt": "2023-08-19 01:10:10",
        "updatedAt": "2023-08-19 01:10:15",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 289,
        "submissionId": 307,
        "pathogenId": 5,
        "createdAt": "2023-08-19 01:10:27",
        "updatedAt": "2023-08-19 01:10:35",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 290,
        "submissionId": 307,
        "pathogenId": 6,
        "createdAt": "2023-08-19 01:10:27",
        "updatedAt": "2023-08-19 01:10:37",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 291,
        "submissionId": 326,
        "pathogenId": 5,
        "createdAt": "2023-08-19 01:11:28",
        "updatedAt": "2023-08-19 01:11:33",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 292,
        "submissionId": 326,
        "pathogenId": 6,
        "createdAt": "2023-08-19 01:11:28",
        "updatedAt": "2023-08-19 01:11:35",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 293,
        "submissionId": 336,
        "pathogenId": 5,
        "createdAt": "2023-08-19 01:12:08",
        "updatedAt": "2023-08-19 01:12:13",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 294,
        "submissionId": 336,
        "pathogenId": 6,
        "createdAt": "2023-08-19 01:12:08",
        "updatedAt": "2023-08-19 01:12:15",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 295,
        "submissionId": 791,
        "pathogenId": 5,
        "createdAt": "2023-08-19 01:12:31",
        "updatedAt": "2023-08-19 01:12:37",
        "deletedAt": null,
        "result": "positive"
      },
      {
        "id": 296,
        "submissionId": 791,
        "pathogenId": 6,
        "createdAt": "2023-08-19 01:12:31",
        "updatedAt": "2023-08-19 01:12:38",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 297,
        "submissionId": 797,
        "pathogenId": 5,
        "createdAt": "2023-08-19 01:13:09",
        "updatedAt": "2023-08-19 01:13:14",
        "deletedAt": null,
        "result": "positive"
      },
      {
        "id": 298,
        "submissionId": 797,
        "pathogenId": 6,
        "createdAt": "2023-08-19 01:13:09",
        "updatedAt": "2023-08-19 01:13:15",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 299,
        "submissionId": 899,
        "pathogenId": 5,
        "createdAt": "2023-08-19 01:13:28",
        "updatedAt": "2023-08-19 01:13:33",
        "deletedAt": null,
        "result": "positive"
      },
      {
        "id": 300,
        "submissionId": 899,
        "pathogenId": 6,
        "createdAt": "2023-08-19 01:13:28",
        "updatedAt": "2023-08-19 01:13:35",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 301,
        "submissionId": 343,
        "pathogenId": 5,
        "createdAt": "2023-08-19 01:14:03",
        "updatedAt": "2023-08-19 01:15:28",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 302,
        "submissionId": 343,
        "pathogenId": 6,
        "createdAt": "2023-08-19 01:14:03",
        "updatedAt": "2023-08-19 01:15:29",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 303,
        "submissionId": 397,
        "pathogenId": 5,
        "createdAt": "2023-08-19 01:15:44",
        "updatedAt": "2023-08-19 01:15:50",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 304,
        "submissionId": 397,
        "pathogenId": 6,
        "createdAt": "2023-08-19 01:15:44",
        "updatedAt": "2023-08-19 01:15:51",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 305,
        "submissionId": 398,
        "pathogenId": 5,
        "createdAt": "2023-08-19 01:16:39",
        "updatedAt": "2023-08-19 01:16:46",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 306,
        "submissionId": 398,
        "pathogenId": 6,
        "createdAt": "2023-08-19 01:16:39",
        "updatedAt": "2023-08-19 01:16:48",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 307,
        "submissionId": 400,
        "pathogenId": 5,
        "createdAt": "2023-08-19 01:17:14",
        "updatedAt": "2023-08-19 01:17:19",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 308,
        "submissionId": 400,
        "pathogenId": 6,
        "createdAt": "2023-08-19 01:17:14",
        "updatedAt": "2023-08-19 01:17:21",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 309,
        "submissionId": 404,
        "pathogenId": 5,
        "createdAt": "2023-08-19 01:17:44",
        "updatedAt": "2023-08-19 01:17:50",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 310,
        "submissionId": 404,
        "pathogenId": 6,
        "createdAt": "2023-08-19 01:17:44",
        "updatedAt": "2023-08-19 01:17:52",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 311,
        "submissionId": 428,
        "pathogenId": 5,
        "createdAt": "2023-08-19 01:18:02",
        "updatedAt": "2023-08-19 01:18:07",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 312,
        "submissionId": 428,
        "pathogenId": 6,
        "createdAt": "2023-08-19 01:18:02",
        "updatedAt": "2023-08-19 01:18:09",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 313,
        "submissionId": 439,
        "pathogenId": 5,
        "createdAt": "2023-08-19 01:18:20",
        "updatedAt": "2023-08-19 01:18:30",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 314,
        "submissionId": 439,
        "pathogenId": 6,
        "createdAt": "2023-08-19 01:18:20",
        "updatedAt": "2023-08-19 01:18:31",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 315,
        "submissionId": 443,
        "pathogenId": 5,
        "createdAt": "2023-08-19 01:18:41",
        "updatedAt": "2023-08-19 01:18:46",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 316,
        "submissionId": 443,
        "pathogenId": 6,
        "createdAt": "2023-08-19 01:18:41",
        "updatedAt": "2023-08-19 01:18:48",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 317,
        "submissionId": 447,
        "pathogenId": 5,
        "createdAt": "2023-08-19 01:18:58",
        "updatedAt": "2023-08-19 01:19:02",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 318,
        "submissionId": 447,
        "pathogenId": 6,
        "createdAt": "2023-08-19 01:18:58",
        "updatedAt": "2023-08-19 01:19:04",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 319,
        "submissionId": 449,
        "pathogenId": 5,
        "createdAt": "2023-08-19 01:19:20",
        "updatedAt": "2023-08-19 01:19:24",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 320,
        "submissionId": 449,
        "pathogenId": 6,
        "createdAt": "2023-08-19 01:19:20",
        "updatedAt": "2023-08-19 01:19:25",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 321,
        "submissionId": 505,
        "pathogenId": 5,
        "createdAt": "2023-08-19 01:19:36",
        "updatedAt": "2023-08-19 01:19:42",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 322,
        "submissionId": 505,
        "pathogenId": 6,
        "createdAt": "2023-08-19 01:19:36",
        "updatedAt": "2023-08-19 01:19:44",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 323,
        "submissionId": 507,
        "pathogenId": 5,
        "createdAt": "2023-08-19 01:19:54",
        "updatedAt": "2023-08-19 01:19:58",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 324,
        "submissionId": 507,
        "pathogenId": 6,
        "createdAt": "2023-08-19 01:19:54",
        "updatedAt": "2023-08-19 01:20:00",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 325,
        "submissionId": 513,
        "pathogenId": 5,
        "createdAt": "2023-08-19 01:20:12",
        "updatedAt": "2023-08-19 01:20:17",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 326,
        "submissionId": 513,
        "pathogenId": 6,
        "createdAt": "2023-08-19 01:20:12",
        "updatedAt": "2023-08-19 01:20:19",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 327,
        "submissionId": 514,
        "pathogenId": 5,
        "createdAt": "2023-08-19 01:20:29",
        "updatedAt": "2023-08-19 01:20:34",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 328,
        "submissionId": 514,
        "pathogenId": 6,
        "createdAt": "2023-08-19 01:20:29",
        "updatedAt": "2023-08-19 01:20:36",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 329,
        "submissionId": 515,
        "pathogenId": 5,
        "createdAt": "2023-08-19 01:20:52",
        "updatedAt": "2023-08-19 01:20:58",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 330,
        "submissionId": 515,
        "pathogenId": 6,
        "createdAt": "2023-08-19 01:20:52",
        "updatedAt": "2023-08-19 01:21:00",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 331,
        "submissionId": 516,
        "pathogenId": 5,
        "createdAt": "2023-08-19 01:21:06",
        "updatedAt": "2023-08-19 01:21:10",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 332,
        "submissionId": 516,
        "pathogenId": 6,
        "createdAt": "2023-08-19 01:21:06",
        "updatedAt": "2023-08-19 01:21:12",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 333,
        "submissionId": 517,
        "pathogenId": 5,
        "createdAt": "2023-08-19 01:21:24",
        "updatedAt": "2023-08-19 01:21:29",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 334,
        "submissionId": 517,
        "pathogenId": 6,
        "createdAt": "2023-08-19 01:21:24",
        "updatedAt": "2023-08-19 01:21:30",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 335,
        "submissionId": 518,
        "pathogenId": 5,
        "createdAt": "2023-08-19 01:21:47",
        "updatedAt": "2023-08-19 01:21:52",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 336,
        "submissionId": 518,
        "pathogenId": 6,
        "createdAt": "2023-08-19 01:21:47",
        "updatedAt": "2023-08-19 01:21:53",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 337,
        "submissionId": 519,
        "pathogenId": 5,
        "createdAt": "2023-08-19 01:22:05",
        "updatedAt": "2023-08-19 01:22:11",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 338,
        "submissionId": 519,
        "pathogenId": 6,
        "createdAt": "2023-08-19 01:22:05",
        "updatedAt": "2023-08-19 01:22:12",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 339,
        "submissionId": 520,
        "pathogenId": 5,
        "createdAt": "2023-08-19 01:22:18",
        "updatedAt": "2023-08-19 01:22:23",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 340,
        "submissionId": 520,
        "pathogenId": 6,
        "createdAt": "2023-08-19 01:22:18",
        "updatedAt": "2023-08-19 01:22:25",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 341,
        "submissionId": 525,
        "pathogenId": 5,
        "createdAt": "2023-08-19 01:22:37",
        "updatedAt": "2023-08-19 01:22:42",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 342,
        "submissionId": 525,
        "pathogenId": 6,
        "createdAt": "2023-08-19 01:22:37",
        "updatedAt": "2023-08-19 01:22:44",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 343,
        "submissionId": 535,
        "pathogenId": 5,
        "createdAt": "2023-08-19 01:22:54",
        "updatedAt": "2023-08-19 01:22:58",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 344,
        "submissionId": 535,
        "pathogenId": 6,
        "createdAt": "2023-08-19 01:22:54",
        "updatedAt": "2023-08-19 01:23:00",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 345,
        "submissionId": 538,
        "pathogenId": 5,
        "createdAt": "2023-08-19 01:23:22",
        "updatedAt": "2023-08-19 01:23:25",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 346,
        "submissionId": 538,
        "pathogenId": 6,
        "createdAt": "2023-08-19 01:23:22",
        "updatedAt": "2023-08-19 01:23:27",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 347,
        "submissionId": 539,
        "pathogenId": 5,
        "createdAt": "2023-08-19 01:23:46",
        "updatedAt": "2023-08-19 01:23:50",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 348,
        "submissionId": 539,
        "pathogenId": 6,
        "createdAt": "2023-08-19 01:23:46",
        "updatedAt": "2023-08-19 01:23:51",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 349,
        "submissionId": 546,
        "pathogenId": 5,
        "createdAt": "2023-08-19 01:24:07",
        "updatedAt": "2023-08-19 01:24:10",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 350,
        "submissionId": 546,
        "pathogenId": 6,
        "createdAt": "2023-08-19 01:24:07",
        "updatedAt": "2023-08-19 01:24:12",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 351,
        "submissionId": 600,
        "pathogenId": 5,
        "createdAt": "2023-08-19 01:24:28",
        "updatedAt": "2023-08-19 01:24:34",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 352,
        "submissionId": 600,
        "pathogenId": 6,
        "createdAt": "2023-08-19 01:24:28",
        "updatedAt": "2023-08-19 01:24:36",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 353,
        "submissionId": 616,
        "pathogenId": 5,
        "createdAt": "2023-08-19 01:24:53",
        "updatedAt": "2023-08-19 01:24:59",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 354,
        "submissionId": 616,
        "pathogenId": 6,
        "createdAt": "2023-08-19 01:24:53",
        "updatedAt": "2023-08-19 01:25:01",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 355,
        "submissionId": 617,
        "pathogenId": 5,
        "createdAt": "2023-08-19 01:25:09",
        "updatedAt": "2023-08-19 01:25:14",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 356,
        "submissionId": 617,
        "pathogenId": 6,
        "createdAt": "2023-08-19 01:25:09",
        "updatedAt": "2023-08-19 01:25:16",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 357,
        "submissionId": 618,
        "pathogenId": 5,
        "createdAt": "2023-08-19 01:25:36",
        "updatedAt": "2023-08-19 01:25:40",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 358,
        "submissionId": 618,
        "pathogenId": 6,
        "createdAt": "2023-08-19 01:25:36",
        "updatedAt": "2023-08-19 01:25:42",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 359,
        "submissionId": 619,
        "pathogenId": 5,
        "createdAt": "2023-08-19 01:26:00",
        "updatedAt": "2023-08-19 01:26:04",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 360,
        "submissionId": 619,
        "pathogenId": 6,
        "createdAt": "2023-08-19 01:26:00",
        "updatedAt": "2023-08-19 01:26:06",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 361,
        "submissionId": 623,
        "pathogenId": 5,
        "createdAt": "2023-08-19 01:26:21",
        "updatedAt": "2023-08-19 01:26:24",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 362,
        "submissionId": 623,
        "pathogenId": 6,
        "createdAt": "2023-08-19 01:26:21",
        "updatedAt": "2023-08-19 01:26:26",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 363,
        "submissionId": 630,
        "pathogenId": 5,
        "createdAt": "2023-08-19 01:26:37",
        "updatedAt": "2023-08-19 01:26:41",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 364,
        "submissionId": 630,
        "pathogenId": 6,
        "createdAt": "2023-08-19 01:26:37",
        "updatedAt": "2023-08-19 01:26:42",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 365,
        "submissionId": 631,
        "pathogenId": 5,
        "createdAt": "2023-08-19 01:26:51",
        "updatedAt": "2023-08-19 01:26:54",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 366,
        "submissionId": 631,
        "pathogenId": 6,
        "createdAt": "2023-08-19 01:26:51",
        "updatedAt": "2023-08-19 01:26:56",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 367,
        "submissionId": 657,
        "pathogenId": 5,
        "createdAt": "2023-08-19 01:27:20",
        "updatedAt": "2023-08-19 01:27:24",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 368,
        "submissionId": 657,
        "pathogenId": 6,
        "createdAt": "2023-08-19 01:27:20",
        "updatedAt": "2023-08-19 01:27:26",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 369,
        "submissionId": 658,
        "pathogenId": 5,
        "createdAt": "2023-08-19 01:28:00",
        "updatedAt": "2023-08-19 01:28:04",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 370,
        "submissionId": 658,
        "pathogenId": 6,
        "createdAt": "2023-08-19 01:28:00",
        "updatedAt": "2023-08-19 01:28:06",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 371,
        "submissionId": 659,
        "pathogenId": 5,
        "createdAt": "2023-08-19 01:28:12",
        "updatedAt": "2023-08-19 01:28:15",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 372,
        "submissionId": 659,
        "pathogenId": 6,
        "createdAt": "2023-08-19 01:28:12",
        "updatedAt": "2023-08-19 01:28:17",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 373,
        "submissionId": 660,
        "pathogenId": 5,
        "createdAt": "2023-08-19 01:28:32",
        "updatedAt": "2023-08-19 01:28:36",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 374,
        "submissionId": 660,
        "pathogenId": 6,
        "createdAt": "2023-08-19 01:28:32",
        "updatedAt": "2023-08-19 01:28:37",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 375,
        "submissionId": 689,
        "pathogenId": 5,
        "createdAt": "2023-08-19 01:29:15",
        "updatedAt": "2023-08-19 01:29:19",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 376,
        "submissionId": 689,
        "pathogenId": 6,
        "createdAt": "2023-08-19 01:29:15",
        "updatedAt": "2023-08-19 01:29:20",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 377,
        "submissionId": 693,
        "pathogenId": 5,
        "createdAt": "2023-08-19 01:29:34",
        "updatedAt": "2023-08-19 01:29:41",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 378,
        "submissionId": 693,
        "pathogenId": 6,
        "createdAt": "2023-08-19 01:29:34",
        "updatedAt": "2023-08-19 01:29:43",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 379,
        "submissionId": 694,
        "pathogenId": 5,
        "createdAt": "2023-08-19 01:29:59",
        "updatedAt": "2023-08-19 01:30:02",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 380,
        "submissionId": 694,
        "pathogenId": 6,
        "createdAt": "2023-08-19 01:29:59",
        "updatedAt": "2023-08-19 01:30:04",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 381,
        "submissionId": 697,
        "pathogenId": 5,
        "createdAt": "2023-08-19 01:30:12",
        "updatedAt": "2023-08-19 01:30:17",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 382,
        "submissionId": 697,
        "pathogenId": 6,
        "createdAt": "2023-08-19 01:30:12",
        "updatedAt": "2023-08-19 01:30:18",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 383,
        "submissionId": 700,
        "pathogenId": 5,
        "createdAt": "2023-08-19 01:30:30",
        "updatedAt": "2023-08-19 01:30:34",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 384,
        "submissionId": 700,
        "pathogenId": 6,
        "createdAt": "2023-08-19 01:30:30",
        "updatedAt": "2023-08-19 01:30:35",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 385,
        "submissionId": 701,
        "pathogenId": 5,
        "createdAt": "2023-08-19 01:31:04",
        "updatedAt": "2023-08-19 01:31:08",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 386,
        "submissionId": 701,
        "pathogenId": 6,
        "createdAt": "2023-08-19 01:31:04",
        "updatedAt": "2023-08-19 01:31:09",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 387,
        "submissionId": 737,
        "pathogenId": 5,
        "createdAt": "2023-08-19 01:31:23",
        "updatedAt": "2023-08-19 01:31:28",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 388,
        "submissionId": 737,
        "pathogenId": 6,
        "createdAt": "2023-08-19 01:31:23",
        "updatedAt": "2023-08-19 01:31:30",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 389,
        "submissionId": 758,
        "pathogenId": 5,
        "createdAt": "2023-08-19 01:31:42",
        "updatedAt": "2023-08-19 01:31:45",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 390,
        "submissionId": 758,
        "pathogenId": 6,
        "createdAt": "2023-08-19 01:31:42",
        "updatedAt": "2023-08-19 01:31:46",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 391,
        "submissionId": 759,
        "pathogenId": 5,
        "createdAt": "2023-08-19 01:31:57",
        "updatedAt": "2023-08-19 01:32:03",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 392,
        "submissionId": 759,
        "pathogenId": 6,
        "createdAt": "2023-08-19 01:31:57",
        "updatedAt": "2023-08-19 01:32:05",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 393,
        "submissionId": 760,
        "pathogenId": 5,
        "createdAt": "2023-08-19 01:32:18",
        "updatedAt": "2023-08-19 01:32:22",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 394,
        "submissionId": 760,
        "pathogenId": 6,
        "createdAt": "2023-08-19 01:32:18",
        "updatedAt": "2023-08-19 01:32:23",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 395,
        "submissionId": 763,
        "pathogenId": 5,
        "createdAt": "2023-08-19 01:32:42",
        "updatedAt": "2023-08-19 01:32:46",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 396,
        "submissionId": 763,
        "pathogenId": 6,
        "createdAt": "2023-08-19 01:32:42",
        "updatedAt": "2023-08-19 01:32:47",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 397,
        "submissionId": 766,
        "pathogenId": 5,
        "createdAt": "2023-08-19 01:32:54",
        "updatedAt": "2023-08-19 01:32:57",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 398,
        "submissionId": 766,
        "pathogenId": 6,
        "createdAt": "2023-08-19 01:32:54",
        "updatedAt": "2023-08-19 01:32:59",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 399,
        "submissionId": 769,
        "pathogenId": 5,
        "createdAt": "2023-08-19 01:33:09",
        "updatedAt": "2023-08-19 01:33:13",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 400,
        "submissionId": 769,
        "pathogenId": 6,
        "createdAt": "2023-08-19 01:33:09",
        "updatedAt": "2023-08-19 01:33:15",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 401,
        "submissionId": 788,
        "pathogenId": 5,
        "createdAt": "2023-08-19 01:33:29",
        "updatedAt": "2023-08-19 01:33:33",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 402,
        "submissionId": 788,
        "pathogenId": 6,
        "createdAt": "2023-08-19 01:33:29",
        "updatedAt": "2023-08-19 01:33:34",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 403,
        "submissionId": 789,
        "pathogenId": 5,
        "createdAt": "2023-08-19 01:33:39",
        "updatedAt": "2023-08-19 01:33:44",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 404,
        "submissionId": 789,
        "pathogenId": 6,
        "createdAt": "2023-08-19 01:33:39",
        "updatedAt": "2023-08-19 01:33:46",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 405,
        "submissionId": 790,
        "pathogenId": 5,
        "createdAt": "2023-08-19 01:34:05",
        "updatedAt": "2023-08-19 01:34:10",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 406,
        "submissionId": 790,
        "pathogenId": 6,
        "createdAt": "2023-08-19 01:34:05",
        "updatedAt": "2023-08-19 01:34:11",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 407,
        "submissionId": 798,
        "pathogenId": 5,
        "createdAt": "2023-08-19 01:34:34",
        "updatedAt": "2023-08-19 01:34:37",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 408,
        "submissionId": 798,
        "pathogenId": 6,
        "createdAt": "2023-08-19 01:34:34",
        "updatedAt": "2023-08-19 01:34:38",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 409,
        "submissionId": 832,
        "pathogenId": 5,
        "createdAt": "2023-08-19 01:34:52",
        "updatedAt": "2023-08-19 01:34:56",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 410,
        "submissionId": 832,
        "pathogenId": 6,
        "createdAt": "2023-08-19 01:34:52",
        "updatedAt": "2023-08-19 01:34:57",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 411,
        "submissionId": 862,
        "pathogenId": 5,
        "createdAt": "2023-08-19 01:35:48",
        "updatedAt": "2023-08-19 01:35:51",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 412,
        "submissionId": 862,
        "pathogenId": 6,
        "createdAt": "2023-08-19 01:35:48",
        "updatedAt": "2023-08-19 01:35:53",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 413,
        "submissionId": 876,
        "pathogenId": 5,
        "createdAt": "2023-08-19 01:35:59",
        "updatedAt": "2023-08-19 01:36:08",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 414,
        "submissionId": 876,
        "pathogenId": 6,
        "createdAt": "2023-08-19 01:35:59",
        "updatedAt": "2023-08-19 01:36:09",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 415,
        "submissionId": 877,
        "pathogenId": 5,
        "createdAt": "2023-08-19 01:36:27",
        "updatedAt": "2023-08-19 01:36:32",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 416,
        "submissionId": 877,
        "pathogenId": 6,
        "createdAt": "2023-08-19 01:36:27",
        "updatedAt": "2023-08-19 01:36:33",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 417,
        "submissionId": 879,
        "pathogenId": 5,
        "createdAt": "2023-08-19 01:36:42",
        "updatedAt": "2023-08-19 01:36:53",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 418,
        "submissionId": 879,
        "pathogenId": 6,
        "createdAt": "2023-08-19 01:36:42",
        "updatedAt": "2023-08-19 01:36:54",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 419,
        "submissionId": 881,
        "pathogenId": 5,
        "createdAt": "2023-08-19 01:37:04",
        "updatedAt": "2023-08-19 01:37:14",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 420,
        "submissionId": 881,
        "pathogenId": 6,
        "createdAt": "2023-08-19 01:37:04",
        "updatedAt": "2023-08-19 01:37:15",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 421,
        "submissionId": 902,
        "pathogenId": 5,
        "createdAt": "2023-08-19 01:37:37",
        "updatedAt": "2023-08-19 01:37:43",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 422,
        "submissionId": 902,
        "pathogenId": 6,
        "createdAt": "2023-08-19 01:37:37",
        "updatedAt": "2023-08-19 01:37:44",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 423,
        "submissionId": 903,
        "pathogenId": 5,
        "createdAt": "2023-08-19 01:37:55",
        "updatedAt": "2023-08-19 01:37:59",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 424,
        "submissionId": 903,
        "pathogenId": 6,
        "createdAt": "2023-08-19 01:37:55",
        "updatedAt": "2023-08-19 01:38:00",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 425,
        "submissionId": 909,
        "pathogenId": 5,
        "createdAt": "2023-08-19 01:38:11",
        "updatedAt": "2023-08-19 01:38:16",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 426,
        "submissionId": 909,
        "pathogenId": 6,
        "createdAt": "2023-08-19 01:38:11",
        "updatedAt": "2023-08-19 01:38:17",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 427,
        "submissionId": 911,
        "pathogenId": 5,
        "createdAt": "2023-08-19 01:38:38",
        "updatedAt": "2023-08-19 01:38:41",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 428,
        "submissionId": 911,
        "pathogenId": 6,
        "createdAt": "2023-08-19 01:38:38",
        "updatedAt": "2023-08-19 01:38:43",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 429,
        "submissionId": 924,
        "pathogenId": 5,
        "createdAt": "2023-08-19 01:38:54",
        "updatedAt": "2023-08-19 01:38:57",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 430,
        "submissionId": 924,
        "pathogenId": 6,
        "createdAt": "2023-08-19 01:38:54",
        "updatedAt": "2023-08-19 01:38:58",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 431,
        "submissionId": 952,
        "pathogenId": 5,
        "createdAt": "2023-08-19 01:39:13",
        "updatedAt": "2023-08-19 01:39:17",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 432,
        "submissionId": 952,
        "pathogenId": 6,
        "createdAt": "2023-08-19 01:39:13",
        "updatedAt": "2023-08-19 01:39:18",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 433,
        "submissionId": 953,
        "pathogenId": 5,
        "createdAt": "2023-08-19 01:39:35",
        "updatedAt": "2023-08-19 01:39:38",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 434,
        "submissionId": 953,
        "pathogenId": 6,
        "createdAt": "2023-08-19 01:39:35",
        "updatedAt": "2023-08-19 01:39:40",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 435,
        "submissionId": 954,
        "pathogenId": 5,
        "createdAt": "2023-08-19 01:39:51",
        "updatedAt": "2023-08-19 01:39:55",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 436,
        "submissionId": 954,
        "pathogenId": 6,
        "createdAt": "2023-08-19 01:39:51",
        "updatedAt": "2023-08-19 01:39:56",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 437,
        "submissionId": 957,
        "pathogenId": 5,
        "createdAt": "2023-08-19 01:40:15",
        "updatedAt": "2023-08-19 01:40:19",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 438,
        "submissionId": 957,
        "pathogenId": 6,
        "createdAt": "2023-08-19 01:40:15",
        "updatedAt": "2023-08-19 01:40:21",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 439,
        "submissionId": 958,
        "pathogenId": 5,
        "createdAt": "2023-08-19 01:40:28",
        "updatedAt": "2023-08-19 01:40:31",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 440,
        "submissionId": 958,
        "pathogenId": 6,
        "createdAt": "2023-08-19 01:40:28",
        "updatedAt": "2023-08-19 01:40:33",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 441,
        "submissionId": 971,
        "pathogenId": 5,
        "createdAt": "2023-08-19 01:40:45",
        "updatedAt": "2023-08-19 01:40:48",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 442,
        "submissionId": 971,
        "pathogenId": 6,
        "createdAt": "2023-08-19 01:40:45",
        "updatedAt": "2023-08-19 01:40:50",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 443,
        "submissionId": 979,
        "pathogenId": 5,
        "createdAt": "2023-08-19 01:43:19",
        "updatedAt": "2023-08-19 01:43:24",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 444,
        "submissionId": 979,
        "pathogenId": 6,
        "createdAt": "2023-08-19 01:43:19",
        "updatedAt": "2023-08-19 01:43:25",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 445,
        "submissionId": 1008,
        "pathogenId": 5,
        "createdAt": "2023-08-19 01:44:31",
        "updatedAt": "2023-08-19 01:44:36",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 446,
        "submissionId": 1008,
        "pathogenId": 6,
        "createdAt": "2023-08-19 01:44:31",
        "updatedAt": "2023-08-19 01:44:37",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 447,
        "submissionId": 842,
        "pathogenId": 5,
        "createdAt": "2023-08-22 11:54:24",
        "updatedAt": "2023-10-23 17:50:04",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 448,
        "submissionId": 842,
        "pathogenId": 6,
        "createdAt": "2023-08-22 11:54:24",
        "updatedAt": "2023-10-23 17:50:05",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 449,
        "submissionId": 1081,
        "pathogenId": 5,
        "createdAt": "2023-08-22 21:09:58",
        "updatedAt": "2023-10-23 18:03:48",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 450,
        "submissionId": 1081,
        "pathogenId": 6,
        "createdAt": "2023-08-22 21:09:58",
        "updatedAt": "2023-10-23 18:03:49",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 451,
        "submissionId": 988,
        "pathogenId": 1,
        "createdAt": "2023-08-23 18:38:24",
        "updatedAt": "2023-10-23 14:52:01",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "positive"
      },
      {
        "id": 452,
        "submissionId": 988,
        "pathogenId": 3,
        "createdAt": "2023-08-23 18:38:24",
        "updatedAt": "2023-10-23 14:52:03",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 453,
        "submissionId": 988,
        "pathogenId": 4,
        "createdAt": "2023-08-23 18:38:24",
        "updatedAt": "2023-10-23 14:52:05",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "positive"
      },
      {
        "id": 454,
        "submissionId": 988,
        "pathogenId": 11,
        "createdAt": "2023-08-23 18:38:24",
        "updatedAt": "2023-08-23 18:38:24",
        "deletedAt": "2023-10-06 21:30:46",
        "result": "pending"
      },
      {
        "id": 455,
        "submissionId": 988,
        "pathogenId": 12,
        "createdAt": "2023-08-23 18:38:24",
        "updatedAt": "2023-08-23 18:38:24",
        "deletedAt": "2023-10-06 21:30:46",
        "result": "pending"
      },
      {
        "id": 456,
        "submissionId": 480,
        "pathogenId": 1,
        "createdAt": "2023-08-23 19:06:06",
        "updatedAt": "2023-09-29 14:32:44",
        "deletedAt": null,
        "result": "positive"
      },
      {
        "id": 457,
        "submissionId": 480,
        "pathogenId": 3,
        "createdAt": "2023-08-23 19:06:06",
        "updatedAt": "2023-09-29 14:33:11",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 458,
        "submissionId": 480,
        "pathogenId": 4,
        "createdAt": "2023-08-23 19:06:06",
        "updatedAt": "2023-10-23 15:41:15",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 459,
        "submissionId": 480,
        "pathogenId": 11,
        "createdAt": "2023-08-23 19:06:06",
        "updatedAt": "2023-08-23 19:06:06",
        "deletedAt": "2023-10-06 21:27:37",
        "result": "pending"
      },
      {
        "id": 460,
        "submissionId": 480,
        "pathogenId": 12,
        "createdAt": "2023-08-23 19:06:06",
        "updatedAt": "2023-08-23 19:06:06",
        "deletedAt": "2023-10-06 21:27:37",
        "result": "pending"
      },
      {
        "id": 461,
        "submissionId": 482,
        "pathogenId": 1,
        "createdAt": "2023-08-23 19:44:53",
        "updatedAt": "2023-09-29 14:33:28",
        "deletedAt": null,
        "result": "positive"
      },
      {
        "id": 462,
        "submissionId": 482,
        "pathogenId": 3,
        "createdAt": "2023-08-23 19:44:53",
        "updatedAt": "2023-09-29 14:33:31",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 463,
        "submissionId": 482,
        "pathogenId": 4,
        "createdAt": "2023-08-23 19:44:53",
        "updatedAt": "2023-09-29 14:33:49",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 464,
        "submissionId": 482,
        "pathogenId": 11,
        "createdAt": "2023-08-23 19:44:53",
        "updatedAt": "2023-08-23 19:44:53",
        "deletedAt": "2023-10-06 21:28:04",
        "result": "pending"
      },
      {
        "id": 465,
        "submissionId": 482,
        "pathogenId": 12,
        "createdAt": "2023-08-23 19:44:53",
        "updatedAt": "2023-08-23 19:44:53",
        "deletedAt": "2023-10-06 21:28:04",
        "result": "pending"
      },
      {
        "id": 466,
        "submissionId": 490,
        "pathogenId": 1,
        "createdAt": "2023-08-23 19:51:02",
        "updatedAt": "2023-09-29 14:34:11",
        "deletedAt": null,
        "result": "positive"
      },
      {
        "id": 467,
        "submissionId": 490,
        "pathogenId": 3,
        "createdAt": "2023-08-23 19:51:02",
        "updatedAt": "2023-09-29 14:34:16",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 468,
        "submissionId": 490,
        "pathogenId": 4,
        "createdAt": "2023-08-23 19:51:02",
        "updatedAt": "2023-10-23 15:56:26",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 469,
        "submissionId": 490,
        "pathogenId": 11,
        "createdAt": "2023-08-23 19:51:02",
        "updatedAt": "2023-08-23 19:51:02",
        "deletedAt": "2023-10-06 21:28:35",
        "result": "pending"
      },
      {
        "id": 470,
        "submissionId": 490,
        "pathogenId": 12,
        "createdAt": "2023-08-23 19:51:02",
        "updatedAt": "2023-08-23 19:51:02",
        "deletedAt": "2023-10-06 21:28:35",
        "result": "pending"
      },
      {
        "id": 471,
        "submissionId": 610,
        "pathogenId": 1,
        "createdAt": "2023-08-23 19:52:47",
        "updatedAt": "2023-10-23 16:06:10",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 472,
        "submissionId": 610,
        "pathogenId": 3,
        "createdAt": "2023-08-23 19:52:47",
        "updatedAt": "2023-10-23 16:09:35",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 473,
        "submissionId": 610,
        "pathogenId": 4,
        "createdAt": "2023-08-23 19:52:47",
        "updatedAt": "2023-10-23 16:09:33",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 474,
        "submissionId": 610,
        "pathogenId": 11,
        "createdAt": "2023-08-23 19:52:47",
        "updatedAt": "2023-08-23 19:52:47",
        "deletedAt": "2023-10-06 21:29:48",
        "result": "pending"
      },
      {
        "id": 475,
        "submissionId": 610,
        "pathogenId": 12,
        "createdAt": "2023-08-23 19:52:47",
        "updatedAt": "2023-08-23 19:52:47",
        "deletedAt": "2023-10-06 21:29:48",
        "result": "pending"
      },
      {
        "id": 476,
        "submissionId": 799,
        "pathogenId": 5,
        "createdAt": "2023-08-23 19:53:54",
        "updatedAt": "2023-10-23 17:32:12",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 477,
        "submissionId": 799,
        "pathogenId": 6,
        "createdAt": "2023-08-23 19:53:54",
        "updatedAt": "2023-10-23 17:32:14",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 478,
        "submissionId": 930,
        "pathogenId": 5,
        "createdAt": "2023-08-23 19:56:19",
        "updatedAt": "2023-10-23 17:34:53",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 479,
        "submissionId": 930,
        "pathogenId": 6,
        "createdAt": "2023-08-23 19:56:19",
        "updatedAt": "2023-10-23 17:34:55",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 480,
        "submissionId": 351,
        "pathogenId": 5,
        "createdAt": "2023-08-23 19:57:42",
        "updatedAt": "2023-10-23 17:25:42",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 481,
        "submissionId": 351,
        "pathogenId": 6,
        "createdAt": "2023-08-23 19:57:42",
        "updatedAt": "2023-10-23 17:25:43",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 482,
        "submissionId": 186,
        "pathogenId": 5,
        "createdAt": "2023-08-23 19:59:38",
        "updatedAt": "2023-10-23 17:24:54",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 483,
        "submissionId": 186,
        "pathogenId": 6,
        "createdAt": "2023-08-23 19:59:38",
        "updatedAt": "2023-10-23 17:24:55",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 484,
        "submissionId": 132,
        "pathogenId": 5,
        "createdAt": "2023-08-23 19:59:58",
        "updatedAt": "2023-10-23 17:23:47",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 485,
        "submissionId": 132,
        "pathogenId": 6,
        "createdAt": "2023-08-23 19:59:58",
        "updatedAt": "2023-10-23 17:23:48",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 486,
        "submissionId": 121,
        "pathogenId": 5,
        "createdAt": "2023-08-23 20:00:05",
        "updatedAt": "2023-10-23 17:07:38",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 487,
        "submissionId": 121,
        "pathogenId": 6,
        "createdAt": "2023-08-23 20:00:05",
        "updatedAt": "2023-10-23 17:07:40",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 488,
        "submissionId": 74,
        "pathogenId": 1,
        "createdAt": "2023-08-23 20:00:29",
        "updatedAt": "2023-08-23 20:00:29",
        "deletedAt": "2023-09-19 20:56:16",
        "result": "pending"
      },
      {
        "id": 489,
        "submissionId": 74,
        "pathogenId": 3,
        "createdAt": "2023-08-23 20:00:29",
        "updatedAt": "2023-08-23 20:00:29",
        "deletedAt": "2023-09-19 20:56:16",
        "result": "pending"
      },
      {
        "id": 490,
        "submissionId": 74,
        "pathogenId": 4,
        "createdAt": "2023-08-23 20:00:29",
        "updatedAt": "2023-08-23 20:00:29",
        "deletedAt": "2023-09-19 20:56:16",
        "result": "pending"
      },
      {
        "id": 491,
        "submissionId": 74,
        "pathogenId": 11,
        "createdAt": "2023-08-23 20:00:29",
        "updatedAt": "2023-08-23 20:00:29",
        "deletedAt": "2023-09-19 20:56:16",
        "result": "pending"
      },
      {
        "id": 492,
        "submissionId": 74,
        "pathogenId": 12,
        "createdAt": "2023-08-23 20:00:29",
        "updatedAt": "2023-08-23 20:00:29",
        "deletedAt": "2023-09-19 20:56:16",
        "result": "pending"
      },
      {
        "id": 493,
        "submissionId": 1005,
        "pathogenId": 5,
        "createdAt": "2023-08-24 18:20:43",
        "updatedAt": "2023-08-24 18:20:43",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "pending"
      },
      {
        "id": 494,
        "submissionId": 1005,
        "pathogenId": 6,
        "createdAt": "2023-08-24 18:20:43",
        "updatedAt": "2023-08-24 18:20:43",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "pending"
      },
      {
        "id": 495,
        "submissionId": 1074,
        "pathogenId": 5,
        "createdAt": "2023-08-26 16:16:57",
        "updatedAt": "2023-10-23 17:37:58",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 496,
        "submissionId": 1074,
        "pathogenId": 6,
        "createdAt": "2023-08-26 16:16:57",
        "updatedAt": "2023-10-23 17:38:00",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 497,
        "submissionId": 1082,
        "pathogenId": 5,
        "createdAt": "2023-08-29 20:26:08",
        "updatedAt": "2023-10-23 17:39:07",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 498,
        "submissionId": 1082,
        "pathogenId": 6,
        "createdAt": "2023-08-29 20:26:08",
        "updatedAt": "2023-10-23 17:39:09",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 499,
        "submissionId": 1089,
        "pathogenId": 5,
        "createdAt": "2023-09-06 14:00:30",
        "updatedAt": "2023-10-23 17:41:44",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 500,
        "submissionId": 1089,
        "pathogenId": 6,
        "createdAt": "2023-09-06 14:00:30",
        "updatedAt": "2023-10-23 17:41:45",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 501,
        "submissionId": 1088,
        "pathogenId": 5,
        "createdAt": "2023-09-06 14:20:09",
        "updatedAt": "2023-10-23 17:39:35",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 502,
        "submissionId": 1088,
        "pathogenId": 6,
        "createdAt": "2023-09-06 14:20:09",
        "updatedAt": "2023-10-23 17:39:37",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 503,
        "submissionId": 1096,
        "pathogenId": 5,
        "createdAt": "2023-09-07 20:39:11",
        "updatedAt": "2023-10-23 17:40:48",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 504,
        "submissionId": 1096,
        "pathogenId": 6,
        "createdAt": "2023-09-07 20:39:11",
        "updatedAt": "2023-10-23 17:40:50",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 505,
        "submissionId": 1095,
        "pathogenId": 1,
        "createdAt": "2023-09-07 20:40:55",
        "updatedAt": "2023-09-29 14:34:40",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 506,
        "submissionId": 1095,
        "pathogenId": 3,
        "createdAt": "2023-09-07 20:40:55",
        "updatedAt": "2023-09-29 14:34:43",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 507,
        "submissionId": 1095,
        "pathogenId": 4,
        "createdAt": "2023-09-07 20:40:55",
        "updatedAt": "2023-10-23 16:31:26",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 508,
        "submissionId": 1095,
        "pathogenId": 11,
        "createdAt": "2023-09-07 20:40:55",
        "updatedAt": "2023-09-07 20:40:55",
        "deletedAt": "2023-10-02 17:29:27",
        "result": "pending"
      },
      {
        "id": 509,
        "submissionId": 1095,
        "pathogenId": 12,
        "createdAt": "2023-09-07 20:40:55",
        "updatedAt": "2023-09-07 20:40:55",
        "deletedAt": "2023-10-02 17:29:27",
        "result": "pending"
      },
      {
        "id": 510,
        "submissionId": 1099,
        "pathogenId": 9,
        "createdAt": "2023-09-13 20:25:26",
        "updatedAt": "2023-09-13 20:25:26",
        "deletedAt": "2023-09-13 20:25:47",
        "result": "pending"
      },
      {
        "id": 511,
        "submissionId": 1099,
        "pathogenId": 5,
        "createdAt": "2023-09-13 20:25:47",
        "updatedAt": "2023-10-23 17:43:49",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 512,
        "submissionId": 1099,
        "pathogenId": 6,
        "createdAt": "2023-09-13 20:25:47",
        "updatedAt": "2023-10-23 17:43:50",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 513,
        "submissionId": 1103,
        "pathogenId": 1,
        "createdAt": "2023-09-13 20:31:05",
        "updatedAt": "2023-10-23 16:32:40",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 514,
        "submissionId": 1103,
        "pathogenId": 3,
        "createdAt": "2023-09-13 20:31:05",
        "updatedAt": "2023-10-23 16:32:41",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 515,
        "submissionId": 1103,
        "pathogenId": 4,
        "createdAt": "2023-09-13 20:31:05",
        "updatedAt": "2023-10-23 16:32:43",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 516,
        "submissionId": 1103,
        "pathogenId": 11,
        "createdAt": "2023-09-13 20:31:05",
        "updatedAt": "2023-09-13 20:31:05",
        "deletedAt": "2023-10-02 20:25:59",
        "result": "pending"
      },
      {
        "id": 517,
        "submissionId": 1103,
        "pathogenId": 12,
        "createdAt": "2023-09-13 20:31:05",
        "updatedAt": "2023-09-13 20:31:05",
        "deletedAt": "2023-10-02 20:25:59",
        "result": "pending"
      },
      {
        "id": 518,
        "submissionId": 1097,
        "pathogenId": 5,
        "createdAt": "2023-09-13 21:27:58",
        "updatedAt": "2023-10-23 17:43:19",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 519,
        "submissionId": 1097,
        "pathogenId": 6,
        "createdAt": "2023-09-13 21:27:58",
        "updatedAt": "2023-10-23 17:43:20",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 520,
        "submissionId": 1109,
        "pathogenId": 5,
        "createdAt": "2023-09-15 19:04:28",
        "updatedAt": "2023-10-23 17:45:04",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 521,
        "submissionId": 1109,
        "pathogenId": 6,
        "createdAt": "2023-09-15 19:04:28",
        "updatedAt": "2023-10-23 17:45:05",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 522,
        "submissionId": 1110,
        "pathogenId": 5,
        "createdAt": "2023-09-15 19:12:46",
        "updatedAt": "2023-10-23 17:45:31",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 523,
        "submissionId": 1110,
        "pathogenId": 6,
        "createdAt": "2023-09-15 19:12:46",
        "updatedAt": "2023-10-23 17:45:33",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 524,
        "submissionId": 1100,
        "pathogenId": 5,
        "createdAt": "2023-09-15 20:04:47",
        "updatedAt": "2023-10-23 17:44:25",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 525,
        "submissionId": 1100,
        "pathogenId": 6,
        "createdAt": "2023-09-15 20:04:47",
        "updatedAt": "2023-10-23 17:44:26",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 526,
        "submissionId": 1102,
        "pathogenId": 5,
        "createdAt": "2023-09-15 20:21:53",
        "updatedAt": "2023-10-23 17:34:01",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 527,
        "submissionId": 1102,
        "pathogenId": 6,
        "createdAt": "2023-09-15 20:21:53",
        "updatedAt": "2023-10-23 17:34:02",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 528,
        "submissionId": 341,
        "pathogenId": 5,
        "createdAt": "2023-09-19 18:00:39",
        "updatedAt": "2023-09-19 18:00:39",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "pending"
      },
      {
        "id": 529,
        "submissionId": 341,
        "pathogenId": 6,
        "createdAt": "2023-09-19 18:00:39",
        "updatedAt": "2023-09-19 18:00:39",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "pending"
      },
      {
        "id": 530,
        "submissionId": 74,
        "pathogenId": 5,
        "createdAt": "2023-09-19 20:56:16",
        "updatedAt": "2023-10-23 17:06:24",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 531,
        "submissionId": 74,
        "pathogenId": 6,
        "createdAt": "2023-09-19 20:56:16",
        "updatedAt": "2023-10-23 17:06:25",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 532,
        "submissionId": 751,
        "pathogenId": 5,
        "createdAt": "2023-09-20 14:21:10",
        "updatedAt": "2023-10-23 17:28:29",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 533,
        "submissionId": 751,
        "pathogenId": 6,
        "createdAt": "2023-09-20 14:21:10",
        "updatedAt": "2023-10-23 17:28:30",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 534,
        "submissionId": 883,
        "pathogenId": 5,
        "createdAt": "2023-09-20 14:24:10",
        "updatedAt": "2023-10-23 17:33:04",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 535,
        "submissionId": 883,
        "pathogenId": 6,
        "createdAt": "2023-09-20 14:24:10",
        "updatedAt": "2023-10-23 17:33:05",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 536,
        "submissionId": 1004,
        "pathogenId": 5,
        "createdAt": "2023-09-20 14:25:31",
        "updatedAt": "2023-09-20 14:25:31",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "pending"
      },
      {
        "id": 537,
        "submissionId": 1004,
        "pathogenId": 6,
        "createdAt": "2023-09-20 14:25:31",
        "updatedAt": "2023-09-20 14:25:31",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "pending"
      },
      {
        "id": 538,
        "submissionId": 1112,
        "pathogenId": 5,
        "createdAt": "2023-09-22 18:42:39",
        "updatedAt": "2023-10-23 14:25:08",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 539,
        "submissionId": 1112,
        "pathogenId": 6,
        "createdAt": "2023-09-22 18:42:39",
        "updatedAt": "2023-10-23 14:25:10",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 540,
        "submissionId": 310,
        "pathogenId": 2,
        "createdAt": "2023-09-29 22:28:30",
        "updatedAt": "2023-10-05 20:09:18",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 541,
        "submissionId": 310,
        "pathogenId": 1,
        "createdAt": "2023-09-29 22:28:55",
        "updatedAt": "2023-10-05 20:09:11",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "positive"
      },
      {
        "id": 542,
        "submissionId": 310,
        "pathogenId": 3,
        "createdAt": "2023-09-29 22:28:55",
        "updatedAt": "2023-10-05 20:09:23",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "positive"
      },
      {
        "id": 543,
        "submissionId": 310,
        "pathogenId": 4,
        "createdAt": "2023-09-29 22:28:55",
        "updatedAt": "2023-10-05 20:09:29",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "positive"
      },
      {
        "id": 544,
        "submissionId": 310,
        "pathogenId": 2,
        "createdAt": "2023-09-29 22:29:05",
        "updatedAt": "2023-10-05 20:09:18",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 545,
        "submissionId": 310,
        "pathogenId": 1,
        "createdAt": "2023-09-29 22:30:26",
        "updatedAt": "2023-10-05 20:09:11",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "positive"
      },
      {
        "id": 546,
        "submissionId": 310,
        "pathogenId": 3,
        "createdAt": "2023-09-29 22:30:26",
        "updatedAt": "2023-10-05 20:09:23",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "positive"
      },
      {
        "id": 547,
        "submissionId": 310,
        "pathogenId": 4,
        "createdAt": "2023-09-29 22:30:26",
        "updatedAt": "2023-10-05 20:09:29",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "positive"
      },
      {
        "id": 548,
        "submissionId": 70,
        "pathogenId": 2,
        "createdAt": "2023-10-02 16:24:01",
        "updatedAt": "2023-10-23 14:27:48",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 549,
        "submissionId": 75,
        "pathogenId": 2,
        "createdAt": "2023-10-02 16:24:09",
        "updatedAt": "2023-10-23 14:31:09",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 550,
        "submissionId": 76,
        "pathogenId": 2,
        "createdAt": "2023-10-02 16:24:16",
        "updatedAt": "2023-10-23 14:31:48",
        "deletedAt": "2023-10-02 21:13:30",
        "result": "negative"
      },
      {
        "id": 551,
        "submissionId": 309,
        "pathogenId": 2,
        "createdAt": "2023-10-02 16:24:30",
        "updatedAt": "2023-10-23 14:32:32",
        "deletedAt": "2023-10-02 21:13:55",
        "result": "negative"
      },
      {
        "id": 552,
        "submissionId": 310,
        "pathogenId": 2,
        "createdAt": "2023-10-02 16:24:39",
        "updatedAt": "2023-10-05 20:09:18",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 553,
        "submissionId": 461,
        "pathogenId": 2,
        "createdAt": "2023-10-02 16:24:48",
        "updatedAt": "2023-10-23 14:50:18",
        "deletedAt": "2023-10-02 21:15:08",
        "result": "negative"
      },
      {
        "id": 554,
        "submissionId": 463,
        "pathogenId": 2,
        "createdAt": "2023-10-02 16:24:57",
        "updatedAt": "2023-10-23 15:20:32",
        "deletedAt": "2023-10-02 21:15:32",
        "result": "negative"
      },
      {
        "id": 555,
        "submissionId": 458,
        "pathogenId": 2,
        "createdAt": "2023-10-02 16:25:06",
        "updatedAt": "2023-10-23 14:36:32",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 556,
        "submissionId": 460,
        "pathogenId": 2,
        "createdAt": "2023-10-02 16:25:14",
        "updatedAt": "2023-10-23 14:40:46",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 557,
        "submissionId": 464,
        "pathogenId": 2,
        "createdAt": "2023-10-02 16:25:21",
        "updatedAt": "2023-10-23 15:21:19",
        "deletedAt": "2023-10-02 21:16:49",
        "result": "negative"
      },
      {
        "id": 558,
        "submissionId": 468,
        "pathogenId": 2,
        "createdAt": "2023-10-02 16:25:29",
        "updatedAt": "2023-10-23 15:23:59",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 559,
        "submissionId": 471,
        "pathogenId": 2,
        "createdAt": "2023-10-02 16:25:41",
        "updatedAt": "2023-10-23 15:24:40",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 560,
        "submissionId": 472,
        "pathogenId": 2,
        "createdAt": "2023-10-02 16:25:48",
        "updatedAt": "2023-10-23 15:25:28",
        "deletedAt": "2023-10-02 21:18:44",
        "result": "negative"
      },
      {
        "id": 561,
        "submissionId": 473,
        "pathogenId": 2,
        "createdAt": "2023-10-02 16:26:18",
        "updatedAt": "2023-10-23 15:26:15",
        "deletedAt": "2023-10-02 21:19:10",
        "result": "negative"
      },
      {
        "id": 562,
        "submissionId": 474,
        "pathogenId": 2,
        "createdAt": "2023-10-02 16:26:33",
        "updatedAt": "2023-10-23 15:26:50",
        "deletedAt": "2023-10-02 21:19:35",
        "result": "negative"
      },
      {
        "id": 563,
        "submissionId": 475,
        "pathogenId": 2,
        "createdAt": "2023-10-02 16:26:43",
        "updatedAt": "2023-10-23 15:27:28",
        "deletedAt": "2023-10-02 21:20:37",
        "result": "negative"
      },
      {
        "id": 564,
        "submissionId": 476,
        "pathogenId": 2,
        "createdAt": "2023-10-02 16:26:49",
        "updatedAt": "2023-10-23 15:28:19",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 565,
        "submissionId": 477,
        "pathogenId": 2,
        "createdAt": "2023-10-02 16:27:09",
        "updatedAt": "2023-10-23 15:29:10",
        "deletedAt": "2023-10-02 21:21:47",
        "result": "positive"
      },
      {
        "id": 566,
        "submissionId": 481,
        "pathogenId": 2,
        "createdAt": "2023-10-02 16:27:17",
        "updatedAt": "2023-10-23 15:42:37",
        "deletedAt": "2023-10-02 21:22:08",
        "result": "negative"
      },
      {
        "id": 567,
        "submissionId": 488,
        "pathogenId": 2,
        "createdAt": "2023-10-02 16:27:23",
        "updatedAt": "2023-10-23 15:50:43",
        "deletedAt": "2023-10-02 21:22:27",
        "result": "negative"
      },
      {
        "id": 568,
        "submissionId": 491,
        "pathogenId": 2,
        "createdAt": "2023-10-02 16:27:33",
        "updatedAt": "2023-10-23 15:56:50",
        "deletedAt": "2023-10-02 21:22:51",
        "result": "negative"
      },
      {
        "id": 569,
        "submissionId": 492,
        "pathogenId": 2,
        "createdAt": "2023-10-02 16:27:39",
        "updatedAt": "2023-10-23 15:57:53",
        "deletedAt": "2023-10-02 21:23:14",
        "result": "negative"
      },
      {
        "id": 570,
        "submissionId": 495,
        "pathogenId": 2,
        "createdAt": "2023-10-02 16:27:46",
        "updatedAt": "2023-10-23 16:03:08",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 571,
        "submissionId": 496,
        "pathogenId": 2,
        "createdAt": "2023-10-02 16:27:53",
        "updatedAt": "2023-10-23 16:03:56",
        "deletedAt": "2023-10-02 21:23:56",
        "result": "negative"
      },
      {
        "id": 572,
        "submissionId": 497,
        "pathogenId": 2,
        "createdAt": "2023-10-02 16:28:07",
        "updatedAt": "2023-10-23 16:04:44",
        "deletedAt": "2023-10-02 21:24:30",
        "result": "negative"
      },
      {
        "id": 573,
        "submissionId": 503,
        "pathogenId": 2,
        "createdAt": "2023-10-02 16:28:14",
        "updatedAt": "2023-10-23 16:05:31",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 574,
        "submissionId": 632,
        "pathogenId": 2,
        "createdAt": "2023-10-02 16:28:21",
        "updatedAt": "2023-10-23 16:10:22",
        "deletedAt": "2023-10-02 21:25:43",
        "result": "negative"
      },
      {
        "id": 575,
        "submissionId": 667,
        "pathogenId": 2,
        "createdAt": "2023-10-02 16:28:29",
        "updatedAt": "2023-10-23 16:11:42",
        "deletedAt": "2023-10-02 21:26:02",
        "result": "negative"
      },
      {
        "id": 576,
        "submissionId": 738,
        "pathogenId": 2,
        "createdAt": "2023-10-02 16:28:36",
        "updatedAt": "2023-10-23 16:12:35",
        "deletedAt": "2023-10-02 21:26:22",
        "result": "negative"
      },
      {
        "id": 577,
        "submissionId": 837,
        "pathogenId": 2,
        "createdAt": "2023-10-02 16:28:43",
        "updatedAt": "2023-10-23 16:13:17",
        "deletedAt": "2023-10-02 21:26:44",
        "result": "negative"
      },
      {
        "id": 578,
        "submissionId": 880,
        "pathogenId": 2,
        "createdAt": "2023-10-02 16:28:52",
        "updatedAt": "2023-10-23 16:14:10",
        "deletedAt": "2023-10-02 21:27:02",
        "result": "negative"
      },
      {
        "id": 579,
        "submissionId": 980,
        "pathogenId": 2,
        "createdAt": "2023-10-02 16:29:00",
        "updatedAt": "2023-10-23 16:17:19",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 580,
        "submissionId": 986,
        "pathogenId": 2,
        "createdAt": "2023-10-02 16:29:07",
        "updatedAt": "2023-10-23 16:18:38",
        "deletedAt": "2023-10-02 21:27:53",
        "result": "negative"
      },
      {
        "id": 581,
        "submissionId": 994,
        "pathogenId": 2,
        "createdAt": "2023-10-02 16:29:14",
        "updatedAt": "2023-10-23 16:21:30",
        "deletedAt": "2023-10-02 21:28:56",
        "result": "negative"
      },
      {
        "id": 582,
        "submissionId": 495,
        "pathogenId": 1,
        "createdAt": "2023-10-02 17:28:52",
        "updatedAt": "2023-10-02 17:28:52",
        "deletedAt": "2023-10-02 21:23:34",
        "result": "pending"
      },
      {
        "id": 583,
        "submissionId": 495,
        "pathogenId": 3,
        "createdAt": "2023-10-02 17:28:52",
        "updatedAt": "2023-10-02 17:28:52",
        "deletedAt": "2023-10-02 21:23:34",
        "result": "pending"
      },
      {
        "id": 584,
        "submissionId": 495,
        "pathogenId": 4,
        "createdAt": "2023-10-02 17:28:52",
        "updatedAt": "2023-10-02 17:28:52",
        "deletedAt": "2023-10-02 21:23:34",
        "result": "pending"
      },
      {
        "id": 585,
        "submissionId": 1095,
        "pathogenId": 2,
        "createdAt": "2023-10-02 17:29:27",
        "updatedAt": "2023-10-23 16:31:20",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "positive"
      },
      {
        "id": 586,
        "submissionId": 75,
        "pathogenId": 1,
        "createdAt": "2023-10-02 20:02:55",
        "updatedAt": "2023-10-02 20:02:55",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "pending"
      },
      {
        "id": 587,
        "submissionId": 75,
        "pathogenId": 3,
        "createdAt": "2023-10-02 20:02:55",
        "updatedAt": "2023-10-02 20:02:55",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "pending"
      },
      {
        "id": 588,
        "submissionId": 75,
        "pathogenId": 4,
        "createdAt": "2023-10-02 20:02:55",
        "updatedAt": "2023-10-02 20:02:55",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "pending"
      },
      {
        "id": 589,
        "submissionId": 185,
        "pathogenId": 2,
        "createdAt": "2023-10-02 20:03:21",
        "updatedAt": "2023-10-02 20:03:21",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "pending"
      },
      {
        "id": 590,
        "submissionId": 70,
        "pathogenId": 1,
        "createdAt": "2023-10-02 20:04:40",
        "updatedAt": "2023-10-10 10:57:20",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 591,
        "submissionId": 70,
        "pathogenId": 3,
        "createdAt": "2023-10-02 20:04:40",
        "updatedAt": "2023-10-10 10:57:22",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 592,
        "submissionId": 70,
        "pathogenId": 4,
        "createdAt": "2023-10-02 20:04:40",
        "updatedAt": "2023-10-10 10:57:24",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 593,
        "submissionId": 70,
        "pathogenId": 2,
        "createdAt": "2023-10-02 20:07:46",
        "updatedAt": "2023-10-23 14:27:48",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 594,
        "submissionId": 70,
        "pathogenId": 11,
        "createdAt": "2023-10-02 20:07:46",
        "updatedAt": "2023-10-02 20:07:46",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "pending"
      },
      {
        "id": 595,
        "submissionId": 70,
        "pathogenId": 12,
        "createdAt": "2023-10-02 20:07:46",
        "updatedAt": "2023-10-02 20:07:46",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "pending"
      },
      {
        "id": 596,
        "submissionId": 70,
        "pathogenId": 1,
        "createdAt": "2023-10-02 20:07:50",
        "updatedAt": "2023-10-10 10:57:20",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 597,
        "submissionId": 70,
        "pathogenId": 3,
        "createdAt": "2023-10-02 20:07:50",
        "updatedAt": "2023-10-10 10:57:22",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 598,
        "submissionId": 70,
        "pathogenId": 4,
        "createdAt": "2023-10-02 20:07:50",
        "updatedAt": "2023-10-10 10:57:24",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 599,
        "submissionId": 70,
        "pathogenId": 2,
        "createdAt": "2023-10-02 20:09:13",
        "updatedAt": "2023-10-23 14:27:48",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 600,
        "submissionId": 70,
        "pathogenId": 11,
        "createdAt": "2023-10-02 20:09:13",
        "updatedAt": "2023-10-02 20:09:13",
        "deletedAt": "2023-10-02 20:23:34",
        "result": "pending"
      },
      {
        "id": 601,
        "submissionId": 70,
        "pathogenId": 12,
        "createdAt": "2023-10-02 20:09:13",
        "updatedAt": "2023-10-02 20:09:13",
        "deletedAt": "2023-10-02 20:23:34",
        "result": "pending"
      },
      {
        "id": 602,
        "submissionId": 70,
        "pathogenId": 1,
        "createdAt": "2023-10-02 20:23:34",
        "updatedAt": "2023-10-10 10:57:20",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 603,
        "submissionId": 70,
        "pathogenId": 3,
        "createdAt": "2023-10-02 20:23:34",
        "updatedAt": "2023-10-10 10:57:22",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 604,
        "submissionId": 70,
        "pathogenId": 4,
        "createdAt": "2023-10-02 20:23:34",
        "updatedAt": "2023-10-10 10:57:24",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 605,
        "submissionId": 70,
        "pathogenId": 2,
        "createdAt": "2023-10-02 20:23:56",
        "updatedAt": "2023-10-23 14:27:48",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 606,
        "submissionId": 70,
        "pathogenId": 1,
        "createdAt": "2023-10-02 20:25:25",
        "updatedAt": "2023-10-10 10:57:20",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 607,
        "submissionId": 70,
        "pathogenId": 3,
        "createdAt": "2023-10-02 20:25:25",
        "updatedAt": "2023-10-10 10:57:22",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 608,
        "submissionId": 70,
        "pathogenId": 4,
        "createdAt": "2023-10-02 20:25:25",
        "updatedAt": "2023-10-10 10:57:24",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 609,
        "submissionId": 70,
        "pathogenId": 2,
        "createdAt": "2023-10-02 20:25:37",
        "updatedAt": "2023-10-23 14:27:48",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 610,
        "submissionId": 1103,
        "pathogenId": 2,
        "createdAt": "2023-10-02 20:25:59",
        "updatedAt": "2023-10-23 16:32:44",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 611,
        "submissionId": 1103,
        "pathogenId": 1,
        "createdAt": "2023-10-02 20:27:31",
        "updatedAt": "2023-10-23 16:32:40",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 612,
        "submissionId": 1103,
        "pathogenId": 3,
        "createdAt": "2023-10-02 20:27:31",
        "updatedAt": "2023-10-23 16:32:41",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 613,
        "submissionId": 1103,
        "pathogenId": 4,
        "createdAt": "2023-10-02 20:27:31",
        "updatedAt": "2023-10-23 16:32:43",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 614,
        "submissionId": 70,
        "pathogenId": 1,
        "createdAt": "2023-10-02 21:12:50",
        "updatedAt": "2023-10-10 10:57:20",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 615,
        "submissionId": 70,
        "pathogenId": 3,
        "createdAt": "2023-10-02 21:12:50",
        "updatedAt": "2023-10-10 10:57:22",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 616,
        "submissionId": 70,
        "pathogenId": 4,
        "createdAt": "2023-10-02 21:12:50",
        "updatedAt": "2023-10-10 10:57:24",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 617,
        "submissionId": 75,
        "pathogenId": 2,
        "createdAt": "2023-10-02 21:13:09",
        "updatedAt": "2023-10-23 14:31:09",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 618,
        "submissionId": 76,
        "pathogenId": 1,
        "createdAt": "2023-10-02 21:13:30",
        "updatedAt": "2023-10-02 21:13:30",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "pending"
      },
      {
        "id": 619,
        "submissionId": 76,
        "pathogenId": 3,
        "createdAt": "2023-10-02 21:13:30",
        "updatedAt": "2023-10-02 21:13:30",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "pending"
      },
      {
        "id": 620,
        "submissionId": 76,
        "pathogenId": 4,
        "createdAt": "2023-10-02 21:13:30",
        "updatedAt": "2023-10-02 21:13:30",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "pending"
      },
      {
        "id": 621,
        "submissionId": 309,
        "pathogenId": 1,
        "createdAt": "2023-10-02 21:13:55",
        "updatedAt": "2023-10-02 21:13:55",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "pending"
      },
      {
        "id": 622,
        "submissionId": 309,
        "pathogenId": 3,
        "createdAt": "2023-10-02 21:13:55",
        "updatedAt": "2023-10-02 21:13:55",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "pending"
      },
      {
        "id": 623,
        "submissionId": 309,
        "pathogenId": 4,
        "createdAt": "2023-10-02 21:13:55",
        "updatedAt": "2023-10-02 21:13:55",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "pending"
      },
      {
        "id": 624,
        "submissionId": 310,
        "pathogenId": 1,
        "createdAt": "2023-10-02 21:14:22",
        "updatedAt": "2023-10-05 20:09:11",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "positive"
      },
      {
        "id": 625,
        "submissionId": 310,
        "pathogenId": 3,
        "createdAt": "2023-10-02 21:14:22",
        "updatedAt": "2023-10-05 20:09:23",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "positive"
      },
      {
        "id": 626,
        "submissionId": 310,
        "pathogenId": 4,
        "createdAt": "2023-10-02 21:14:22",
        "updatedAt": "2023-10-05 20:09:29",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "positive"
      },
      {
        "id": 627,
        "submissionId": 461,
        "pathogenId": 1,
        "createdAt": "2023-10-02 21:15:08",
        "updatedAt": "2023-10-02 21:15:08",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "pending"
      },
      {
        "id": 628,
        "submissionId": 461,
        "pathogenId": 3,
        "createdAt": "2023-10-02 21:15:08",
        "updatedAt": "2023-10-02 21:15:08",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "pending"
      },
      {
        "id": 629,
        "submissionId": 461,
        "pathogenId": 4,
        "createdAt": "2023-10-02 21:15:08",
        "updatedAt": "2023-10-02 21:15:08",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "pending"
      },
      {
        "id": 630,
        "submissionId": 463,
        "pathogenId": 1,
        "createdAt": "2023-10-02 21:15:32",
        "updatedAt": "2023-10-02 21:15:32",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "pending"
      },
      {
        "id": 631,
        "submissionId": 463,
        "pathogenId": 3,
        "createdAt": "2023-10-02 21:15:32",
        "updatedAt": "2023-10-02 21:15:32",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "pending"
      },
      {
        "id": 632,
        "submissionId": 463,
        "pathogenId": 4,
        "createdAt": "2023-10-02 21:15:32",
        "updatedAt": "2023-10-02 21:15:32",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "pending"
      },
      {
        "id": 633,
        "submissionId": 458,
        "pathogenId": 1,
        "createdAt": "2023-10-02 21:15:49",
        "updatedAt": "2023-10-02 21:15:49",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "pending"
      },
      {
        "id": 634,
        "submissionId": 458,
        "pathogenId": 3,
        "createdAt": "2023-10-02 21:15:49",
        "updatedAt": "2023-10-02 21:15:49",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "pending"
      },
      {
        "id": 635,
        "submissionId": 458,
        "pathogenId": 4,
        "createdAt": "2023-10-02 21:15:49",
        "updatedAt": "2023-10-02 21:15:49",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "pending"
      },
      {
        "id": 636,
        "submissionId": 460,
        "pathogenId": 1,
        "createdAt": "2023-10-02 21:16:27",
        "updatedAt": "2023-10-23 14:40:25",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 637,
        "submissionId": 460,
        "pathogenId": 3,
        "createdAt": "2023-10-02 21:16:27",
        "updatedAt": "2023-10-23 14:40:30",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 638,
        "submissionId": 460,
        "pathogenId": 4,
        "createdAt": "2023-10-02 21:16:27",
        "updatedAt": "2023-10-23 14:40:44",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 639,
        "submissionId": 464,
        "pathogenId": 1,
        "createdAt": "2023-10-02 21:16:49",
        "updatedAt": "2023-10-02 21:16:49",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "pending"
      },
      {
        "id": 640,
        "submissionId": 464,
        "pathogenId": 3,
        "createdAt": "2023-10-02 21:16:49",
        "updatedAt": "2023-10-02 21:16:49",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "pending"
      },
      {
        "id": 641,
        "submissionId": 464,
        "pathogenId": 4,
        "createdAt": "2023-10-02 21:16:49",
        "updatedAt": "2023-10-02 21:16:49",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "pending"
      },
      {
        "id": 642,
        "submissionId": 468,
        "pathogenId": 1,
        "createdAt": "2023-10-02 21:17:06",
        "updatedAt": "2023-10-02 21:17:06",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "pending"
      },
      {
        "id": 643,
        "submissionId": 468,
        "pathogenId": 3,
        "createdAt": "2023-10-02 21:17:06",
        "updatedAt": "2023-10-02 21:17:06",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "pending"
      },
      {
        "id": 644,
        "submissionId": 468,
        "pathogenId": 4,
        "createdAt": "2023-10-02 21:17:06",
        "updatedAt": "2023-10-02 21:17:06",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "pending"
      },
      {
        "id": 645,
        "submissionId": 471,
        "pathogenId": 1,
        "createdAt": "2023-10-02 21:17:52",
        "updatedAt": "2023-10-02 21:17:52",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "pending"
      },
      {
        "id": 646,
        "submissionId": 471,
        "pathogenId": 3,
        "createdAt": "2023-10-02 21:17:52",
        "updatedAt": "2023-10-02 21:17:52",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "pending"
      },
      {
        "id": 647,
        "submissionId": 471,
        "pathogenId": 4,
        "createdAt": "2023-10-02 21:17:52",
        "updatedAt": "2023-10-02 21:17:52",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "pending"
      },
      {
        "id": 648,
        "submissionId": 472,
        "pathogenId": 1,
        "createdAt": "2023-10-02 21:18:44",
        "updatedAt": "2023-10-02 21:18:44",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "pending"
      },
      {
        "id": 649,
        "submissionId": 472,
        "pathogenId": 3,
        "createdAt": "2023-10-02 21:18:44",
        "updatedAt": "2023-10-02 21:18:44",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "pending"
      },
      {
        "id": 650,
        "submissionId": 472,
        "pathogenId": 4,
        "createdAt": "2023-10-02 21:18:44",
        "updatedAt": "2023-10-02 21:18:44",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "pending"
      },
      {
        "id": 651,
        "submissionId": 473,
        "pathogenId": 1,
        "createdAt": "2023-10-02 21:19:10",
        "updatedAt": "2023-10-02 21:19:10",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "pending"
      },
      {
        "id": 652,
        "submissionId": 473,
        "pathogenId": 3,
        "createdAt": "2023-10-02 21:19:10",
        "updatedAt": "2023-10-02 21:19:10",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "pending"
      },
      {
        "id": 653,
        "submissionId": 473,
        "pathogenId": 4,
        "createdAt": "2023-10-02 21:19:10",
        "updatedAt": "2023-10-02 21:19:10",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "pending"
      },
      {
        "id": 654,
        "submissionId": 474,
        "pathogenId": 1,
        "createdAt": "2023-10-02 21:19:35",
        "updatedAt": "2023-10-02 21:19:35",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "pending"
      },
      {
        "id": 655,
        "submissionId": 474,
        "pathogenId": 3,
        "createdAt": "2023-10-02 21:19:35",
        "updatedAt": "2023-10-02 21:19:35",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "pending"
      },
      {
        "id": 656,
        "submissionId": 474,
        "pathogenId": 4,
        "createdAt": "2023-10-02 21:19:35",
        "updatedAt": "2023-10-02 21:19:35",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "pending"
      },
      {
        "id": 657,
        "submissionId": 475,
        "pathogenId": 1,
        "createdAt": "2023-10-02 21:20:37",
        "updatedAt": "2023-10-02 21:20:37",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "pending"
      },
      {
        "id": 658,
        "submissionId": 475,
        "pathogenId": 3,
        "createdAt": "2023-10-02 21:20:37",
        "updatedAt": "2023-10-02 21:20:37",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "pending"
      },
      {
        "id": 659,
        "submissionId": 475,
        "pathogenId": 4,
        "createdAt": "2023-10-02 21:20:37",
        "updatedAt": "2023-10-02 21:20:37",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "pending"
      },
      {
        "id": 660,
        "submissionId": 476,
        "pathogenId": 1,
        "createdAt": "2023-10-02 21:21:20",
        "updatedAt": "2023-10-02 21:21:20",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "pending"
      },
      {
        "id": 661,
        "submissionId": 476,
        "pathogenId": 3,
        "createdAt": "2023-10-02 21:21:20",
        "updatedAt": "2023-10-02 21:21:20",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "pending"
      },
      {
        "id": 662,
        "submissionId": 476,
        "pathogenId": 4,
        "createdAt": "2023-10-02 21:21:20",
        "updatedAt": "2023-10-02 21:21:20",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "pending"
      },
      {
        "id": 663,
        "submissionId": 477,
        "pathogenId": 1,
        "createdAt": "2023-10-02 21:21:47",
        "updatedAt": "2023-10-02 21:21:47",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "pending"
      },
      {
        "id": 664,
        "submissionId": 477,
        "pathogenId": 3,
        "createdAt": "2023-10-02 21:21:47",
        "updatedAt": "2023-10-02 21:21:47",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "pending"
      },
      {
        "id": 665,
        "submissionId": 477,
        "pathogenId": 4,
        "createdAt": "2023-10-02 21:21:47",
        "updatedAt": "2023-10-02 21:21:47",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "pending"
      },
      {
        "id": 666,
        "submissionId": 481,
        "pathogenId": 1,
        "createdAt": "2023-10-02 21:22:08",
        "updatedAt": "2023-10-02 21:22:08",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "pending"
      },
      {
        "id": 667,
        "submissionId": 481,
        "pathogenId": 3,
        "createdAt": "2023-10-02 21:22:08",
        "updatedAt": "2023-10-02 21:22:08",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "pending"
      },
      {
        "id": 668,
        "submissionId": 481,
        "pathogenId": 4,
        "createdAt": "2023-10-02 21:22:08",
        "updatedAt": "2023-10-02 21:22:08",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "pending"
      },
      {
        "id": 669,
        "submissionId": 488,
        "pathogenId": 1,
        "createdAt": "2023-10-02 21:22:27",
        "updatedAt": "2023-10-02 21:22:27",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "pending"
      },
      {
        "id": 670,
        "submissionId": 488,
        "pathogenId": 3,
        "createdAt": "2023-10-02 21:22:27",
        "updatedAt": "2023-10-02 21:22:27",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "pending"
      },
      {
        "id": 671,
        "submissionId": 488,
        "pathogenId": 4,
        "createdAt": "2023-10-02 21:22:27",
        "updatedAt": "2023-10-02 21:22:27",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "pending"
      },
      {
        "id": 672,
        "submissionId": 491,
        "pathogenId": 1,
        "createdAt": "2023-10-02 21:22:51",
        "updatedAt": "2023-10-02 21:22:51",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "pending"
      },
      {
        "id": 673,
        "submissionId": 491,
        "pathogenId": 3,
        "createdAt": "2023-10-02 21:22:51",
        "updatedAt": "2023-10-02 21:22:51",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "pending"
      },
      {
        "id": 674,
        "submissionId": 491,
        "pathogenId": 4,
        "createdAt": "2023-10-02 21:22:51",
        "updatedAt": "2023-10-02 21:22:51",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "pending"
      },
      {
        "id": 675,
        "submissionId": 492,
        "pathogenId": 1,
        "createdAt": "2023-10-02 21:23:14",
        "updatedAt": "2023-10-02 21:23:14",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "pending"
      },
      {
        "id": 676,
        "submissionId": 492,
        "pathogenId": 3,
        "createdAt": "2023-10-02 21:23:14",
        "updatedAt": "2023-10-02 21:23:14",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "pending"
      },
      {
        "id": 677,
        "submissionId": 492,
        "pathogenId": 4,
        "createdAt": "2023-10-02 21:23:14",
        "updatedAt": "2023-10-02 21:23:14",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "pending"
      },
      {
        "id": 678,
        "submissionId": 495,
        "pathogenId": 2,
        "createdAt": "2023-10-02 21:23:34",
        "updatedAt": "2023-10-23 16:03:08",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 679,
        "submissionId": 496,
        "pathogenId": 1,
        "createdAt": "2023-10-02 21:23:56",
        "updatedAt": "2023-10-02 21:23:56",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "pending"
      },
      {
        "id": 680,
        "submissionId": 496,
        "pathogenId": 3,
        "createdAt": "2023-10-02 21:23:56",
        "updatedAt": "2023-10-02 21:23:56",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "pending"
      },
      {
        "id": 681,
        "submissionId": 496,
        "pathogenId": 4,
        "createdAt": "2023-10-02 21:23:56",
        "updatedAt": "2023-10-02 21:23:56",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "pending"
      },
      {
        "id": 682,
        "submissionId": 497,
        "pathogenId": 1,
        "createdAt": "2023-10-02 21:24:30",
        "updatedAt": "2023-10-02 21:24:30",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "pending"
      },
      {
        "id": 683,
        "submissionId": 497,
        "pathogenId": 3,
        "createdAt": "2023-10-02 21:24:30",
        "updatedAt": "2023-10-02 21:24:30",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "pending"
      },
      {
        "id": 684,
        "submissionId": 497,
        "pathogenId": 4,
        "createdAt": "2023-10-02 21:24:30",
        "updatedAt": "2023-10-02 21:24:30",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "pending"
      },
      {
        "id": 685,
        "submissionId": 503,
        "pathogenId": 1,
        "createdAt": "2023-10-02 21:25:02",
        "updatedAt": "2023-10-02 21:25:02",
        "deletedAt": "2023-10-02 21:25:28",
        "result": "pending"
      },
      {
        "id": 686,
        "submissionId": 503,
        "pathogenId": 3,
        "createdAt": "2023-10-02 21:25:02",
        "updatedAt": "2023-10-02 21:25:02",
        "deletedAt": "2023-10-02 21:25:28",
        "result": "pending"
      },
      {
        "id": 687,
        "submissionId": 503,
        "pathogenId": 4,
        "createdAt": "2023-10-02 21:25:02",
        "updatedAt": "2023-10-02 21:25:02",
        "deletedAt": "2023-10-02 21:25:28",
        "result": "pending"
      },
      {
        "id": 688,
        "submissionId": 503,
        "pathogenId": 2,
        "createdAt": "2023-10-02 21:25:28",
        "updatedAt": "2023-10-23 16:05:31",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 689,
        "submissionId": 632,
        "pathogenId": 1,
        "createdAt": "2023-10-02 21:25:43",
        "updatedAt": "2023-10-02 21:25:43",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "pending"
      },
      {
        "id": 690,
        "submissionId": 632,
        "pathogenId": 3,
        "createdAt": "2023-10-02 21:25:43",
        "updatedAt": "2023-10-02 21:25:43",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "pending"
      },
      {
        "id": 691,
        "submissionId": 632,
        "pathogenId": 4,
        "createdAt": "2023-10-02 21:25:43",
        "updatedAt": "2023-10-02 21:25:43",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "pending"
      },
      {
        "id": 692,
        "submissionId": 667,
        "pathogenId": 1,
        "createdAt": "2023-10-02 21:26:02",
        "updatedAt": "2023-10-02 21:26:02",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "pending"
      },
      {
        "id": 693,
        "submissionId": 667,
        "pathogenId": 3,
        "createdAt": "2023-10-02 21:26:02",
        "updatedAt": "2023-10-02 21:26:02",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "pending"
      },
      {
        "id": 694,
        "submissionId": 667,
        "pathogenId": 4,
        "createdAt": "2023-10-02 21:26:02",
        "updatedAt": "2023-10-02 21:26:02",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "pending"
      },
      {
        "id": 695,
        "submissionId": 738,
        "pathogenId": 1,
        "createdAt": "2023-10-02 21:26:22",
        "updatedAt": "2023-10-02 21:26:22",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "pending"
      },
      {
        "id": 696,
        "submissionId": 738,
        "pathogenId": 3,
        "createdAt": "2023-10-02 21:26:22",
        "updatedAt": "2023-10-02 21:26:22",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "pending"
      },
      {
        "id": 697,
        "submissionId": 738,
        "pathogenId": 4,
        "createdAt": "2023-10-02 21:26:22",
        "updatedAt": "2023-10-02 21:26:22",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "pending"
      },
      {
        "id": 698,
        "submissionId": 837,
        "pathogenId": 1,
        "createdAt": "2023-10-02 21:26:44",
        "updatedAt": "2023-10-02 21:26:44",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "pending"
      },
      {
        "id": 699,
        "submissionId": 837,
        "pathogenId": 3,
        "createdAt": "2023-10-02 21:26:44",
        "updatedAt": "2023-10-02 21:26:44",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "pending"
      },
      {
        "id": 700,
        "submissionId": 837,
        "pathogenId": 4,
        "createdAt": "2023-10-02 21:26:44",
        "updatedAt": "2023-10-02 21:26:44",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "pending"
      },
      {
        "id": 701,
        "submissionId": 880,
        "pathogenId": 1,
        "createdAt": "2023-10-02 21:27:02",
        "updatedAt": "2023-10-02 21:27:02",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "pending"
      },
      {
        "id": 702,
        "submissionId": 880,
        "pathogenId": 3,
        "createdAt": "2023-10-02 21:27:02",
        "updatedAt": "2023-10-02 21:27:02",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "pending"
      },
      {
        "id": 703,
        "submissionId": 880,
        "pathogenId": 4,
        "createdAt": "2023-10-02 21:27:02",
        "updatedAt": "2023-10-02 21:27:02",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "pending"
      },
      {
        "id": 704,
        "submissionId": 980,
        "pathogenId": 1,
        "createdAt": "2023-10-02 21:27:24",
        "updatedAt": "2023-10-02 21:27:24",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "pending"
      },
      {
        "id": 705,
        "submissionId": 980,
        "pathogenId": 3,
        "createdAt": "2023-10-02 21:27:24",
        "updatedAt": "2023-10-02 21:27:24",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "pending"
      },
      {
        "id": 706,
        "submissionId": 980,
        "pathogenId": 4,
        "createdAt": "2023-10-02 21:27:24",
        "updatedAt": "2023-10-02 21:27:24",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "pending"
      },
      {
        "id": 707,
        "submissionId": 986,
        "pathogenId": 1,
        "createdAt": "2023-10-02 21:27:53",
        "updatedAt": "2023-10-02 21:27:53",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "pending"
      },
      {
        "id": 708,
        "submissionId": 986,
        "pathogenId": 3,
        "createdAt": "2023-10-02 21:27:53",
        "updatedAt": "2023-10-02 21:27:53",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "pending"
      },
      {
        "id": 709,
        "submissionId": 986,
        "pathogenId": 4,
        "createdAt": "2023-10-02 21:27:53",
        "updatedAt": "2023-10-02 21:27:53",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "pending"
      },
      {
        "id": 710,
        "submissionId": 994,
        "pathogenId": 1,
        "createdAt": "2023-10-02 21:28:56",
        "updatedAt": "2023-10-02 21:28:56",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "pending"
      },
      {
        "id": 711,
        "submissionId": 994,
        "pathogenId": 3,
        "createdAt": "2023-10-02 21:28:56",
        "updatedAt": "2023-10-02 21:28:56",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "pending"
      },
      {
        "id": 712,
        "submissionId": 994,
        "pathogenId": 4,
        "createdAt": "2023-10-02 21:28:56",
        "updatedAt": "2023-10-02 21:28:56",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "pending"
      },
      {
        "id": 713,
        "submissionId": 70,
        "pathogenId": 1,
        "createdAt": "2023-10-03 10:28:57",
        "updatedAt": "2023-10-10 10:57:20",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 714,
        "submissionId": 70,
        "pathogenId": 3,
        "createdAt": "2023-10-03 10:28:57",
        "updatedAt": "2023-10-10 10:57:22",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 715,
        "submissionId": 70,
        "pathogenId": 4,
        "createdAt": "2023-10-03 10:28:57",
        "updatedAt": "2023-10-10 10:57:24",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 716,
        "submissionId": 70,
        "pathogenId": 2,
        "createdAt": "2023-10-03 10:28:57",
        "updatedAt": "2023-10-23 14:27:48",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 717,
        "submissionId": 1103,
        "pathogenId": 1,
        "createdAt": "2023-10-03 10:29:11",
        "updatedAt": "2023-10-23 16:32:40",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 718,
        "submissionId": 1103,
        "pathogenId": 3,
        "createdAt": "2023-10-03 10:29:11",
        "updatedAt": "2023-10-23 16:32:41",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 719,
        "submissionId": 1103,
        "pathogenId": 4,
        "createdAt": "2023-10-03 10:29:11",
        "updatedAt": "2023-10-23 16:32:43",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 720,
        "submissionId": 1103,
        "pathogenId": 2,
        "createdAt": "2023-10-03 10:29:11",
        "updatedAt": "2023-10-23 16:32:44",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 721,
        "submissionId": 1119,
        "pathogenId": 1,
        "createdAt": "2023-10-04 18:50:41",
        "updatedAt": "2023-10-26 21:08:05",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 722,
        "submissionId": 1119,
        "pathogenId": 3,
        "createdAt": "2023-10-04 18:50:41",
        "updatedAt": "2023-10-26 21:08:17",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 723,
        "submissionId": 1119,
        "pathogenId": 4,
        "createdAt": "2023-10-04 18:50:41",
        "updatedAt": "2023-10-26 21:08:24",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 724,
        "submissionId": 1119,
        "pathogenId": 2,
        "createdAt": "2023-10-04 18:50:41",
        "updatedAt": "2023-10-26 21:08:12",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 725,
        "submissionId": 1119,
        "pathogenId": 1,
        "createdAt": "2023-10-04 18:50:46",
        "updatedAt": "2023-10-26 21:08:05",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 726,
        "submissionId": 1119,
        "pathogenId": 3,
        "createdAt": "2023-10-04 18:50:46",
        "updatedAt": "2023-10-26 21:08:17",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 727,
        "submissionId": 1119,
        "pathogenId": 4,
        "createdAt": "2023-10-04 18:50:46",
        "updatedAt": "2023-10-26 21:08:24",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 728,
        "submissionId": 1119,
        "pathogenId": 2,
        "createdAt": "2023-10-04 18:50:46",
        "updatedAt": "2023-10-26 21:08:12",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 729,
        "submissionId": 1119,
        "pathogenId": 1,
        "createdAt": "2023-10-04 18:51:49",
        "updatedAt": "2023-10-26 21:08:05",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 730,
        "submissionId": 1119,
        "pathogenId": 3,
        "createdAt": "2023-10-04 18:51:49",
        "updatedAt": "2023-10-26 21:08:17",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 731,
        "submissionId": 1119,
        "pathogenId": 4,
        "createdAt": "2023-10-04 18:51:49",
        "updatedAt": "2023-10-26 21:08:24",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 732,
        "submissionId": 1119,
        "pathogenId": 2,
        "createdAt": "2023-10-04 18:51:49",
        "updatedAt": "2023-10-26 21:08:12",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 733,
        "submissionId": 310,
        "pathogenId": 1,
        "createdAt": "2023-10-05 20:08:20",
        "updatedAt": "2023-10-05 20:09:11",
        "deletedAt": null,
        "result": "positive"
      },
      {
        "id": 734,
        "submissionId": 310,
        "pathogenId": 3,
        "createdAt": "2023-10-05 20:08:20",
        "updatedAt": "2023-10-05 20:09:23",
        "deletedAt": null,
        "result": "positive"
      },
      {
        "id": 735,
        "submissionId": 310,
        "pathogenId": 4,
        "createdAt": "2023-10-05 20:08:20",
        "updatedAt": "2023-10-05 20:09:29",
        "deletedAt": null,
        "result": "positive"
      },
      {
        "id": 736,
        "submissionId": 310,
        "pathogenId": 2,
        "createdAt": "2023-10-05 20:08:20",
        "updatedAt": "2023-10-05 20:09:18",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 737,
        "submissionId": 43,
        "pathogenId": 5,
        "createdAt": "2023-10-06 19:49:47",
        "updatedAt": "2023-10-23 17:03:48",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 738,
        "submissionId": 43,
        "pathogenId": 6,
        "createdAt": "2023-10-06 19:49:47",
        "updatedAt": "2023-10-23 17:03:49",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 739,
        "submissionId": 52,
        "pathogenId": 5,
        "createdAt": "2023-10-06 19:50:33",
        "updatedAt": "2023-10-23 17:04:52",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 740,
        "submissionId": 52,
        "pathogenId": 6,
        "createdAt": "2023-10-06 19:50:33",
        "updatedAt": "2023-10-23 17:04:53",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 741,
        "submissionId": 74,
        "pathogenId": 5,
        "createdAt": "2023-10-06 19:51:04",
        "updatedAt": "2023-10-23 17:06:24",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 742,
        "submissionId": 74,
        "pathogenId": 6,
        "createdAt": "2023-10-06 19:51:04",
        "updatedAt": "2023-10-23 17:06:25",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 743,
        "submissionId": 98,
        "pathogenId": 5,
        "createdAt": "2023-10-06 19:52:04",
        "updatedAt": "2023-10-23 17:07:06",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 744,
        "submissionId": 98,
        "pathogenId": 6,
        "createdAt": "2023-10-06 19:52:04",
        "updatedAt": "2023-10-23 17:07:07",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 745,
        "submissionId": 121,
        "pathogenId": 5,
        "createdAt": "2023-10-06 19:52:39",
        "updatedAt": "2023-10-23 17:07:38",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 746,
        "submissionId": 121,
        "pathogenId": 6,
        "createdAt": "2023-10-06 19:52:39",
        "updatedAt": "2023-10-23 17:07:40",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 747,
        "submissionId": 132,
        "pathogenId": 5,
        "createdAt": "2023-10-06 19:53:16",
        "updatedAt": "2023-10-23 17:23:47",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 748,
        "submissionId": 132,
        "pathogenId": 6,
        "createdAt": "2023-10-06 19:53:16",
        "updatedAt": "2023-10-23 17:23:48",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 749,
        "submissionId": 165,
        "pathogenId": 5,
        "createdAt": "2023-10-06 19:53:50",
        "updatedAt": "2023-10-06 19:53:50",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "pending"
      },
      {
        "id": 750,
        "submissionId": 165,
        "pathogenId": 6,
        "createdAt": "2023-10-06 19:53:50",
        "updatedAt": "2023-10-06 19:53:50",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "pending"
      },
      {
        "id": 751,
        "submissionId": 186,
        "pathogenId": 5,
        "createdAt": "2023-10-06 19:54:06",
        "updatedAt": "2023-10-23 17:24:54",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 752,
        "submissionId": 186,
        "pathogenId": 6,
        "createdAt": "2023-10-06 19:54:06",
        "updatedAt": "2023-10-23 17:24:55",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 753,
        "submissionId": 351,
        "pathogenId": 5,
        "createdAt": "2023-10-06 19:54:47",
        "updatedAt": "2023-10-23 17:25:42",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 754,
        "submissionId": 351,
        "pathogenId": 6,
        "createdAt": "2023-10-06 19:54:47",
        "updatedAt": "2023-10-23 17:25:43",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 755,
        "submissionId": 448,
        "pathogenId": 5,
        "createdAt": "2023-10-06 19:55:19",
        "updatedAt": "2023-10-23 17:27:35",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 756,
        "submissionId": 448,
        "pathogenId": 6,
        "createdAt": "2023-10-06 19:55:19",
        "updatedAt": "2023-10-23 17:27:37",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 757,
        "submissionId": 751,
        "pathogenId": 5,
        "createdAt": "2023-10-06 19:56:06",
        "updatedAt": "2023-10-23 17:28:29",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 758,
        "submissionId": 751,
        "pathogenId": 6,
        "createdAt": "2023-10-06 19:56:06",
        "updatedAt": "2023-10-23 17:28:30",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 759,
        "submissionId": 770,
        "pathogenId": 5,
        "createdAt": "2023-10-06 19:56:56",
        "updatedAt": "2023-10-23 17:29:10",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 760,
        "submissionId": 770,
        "pathogenId": 6,
        "createdAt": "2023-10-06 19:56:56",
        "updatedAt": "2023-10-23 17:29:12",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 761,
        "submissionId": 799,
        "pathogenId": 5,
        "createdAt": "2023-10-06 19:57:20",
        "updatedAt": "2023-10-23 17:32:12",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 762,
        "submissionId": 799,
        "pathogenId": 6,
        "createdAt": "2023-10-06 19:57:20",
        "updatedAt": "2023-10-23 17:32:14",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 763,
        "submissionId": 842,
        "pathogenId": 5,
        "createdAt": "2023-10-06 19:58:17",
        "updatedAt": "2023-10-23 17:50:04",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 764,
        "submissionId": 842,
        "pathogenId": 6,
        "createdAt": "2023-10-06 19:58:17",
        "updatedAt": "2023-10-23 17:50:05",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 765,
        "submissionId": 883,
        "pathogenId": 5,
        "createdAt": "2023-10-06 20:00:07",
        "updatedAt": "2023-10-23 17:33:04",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 766,
        "submissionId": 883,
        "pathogenId": 6,
        "createdAt": "2023-10-06 20:00:07",
        "updatedAt": "2023-10-23 17:33:05",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 767,
        "submissionId": 930,
        "pathogenId": 5,
        "createdAt": "2023-10-06 20:00:41",
        "updatedAt": "2023-10-23 17:34:53",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 768,
        "submissionId": 930,
        "pathogenId": 6,
        "createdAt": "2023-10-06 20:00:41",
        "updatedAt": "2023-10-23 17:34:55",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 769,
        "submissionId": 992,
        "pathogenId": 5,
        "createdAt": "2023-10-06 20:01:16",
        "updatedAt": "2023-10-23 17:50:46",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 770,
        "submissionId": 992,
        "pathogenId": 6,
        "createdAt": "2023-10-06 20:01:16",
        "updatedAt": "2023-10-23 17:50:47",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 771,
        "submissionId": 993,
        "pathogenId": 5,
        "createdAt": "2023-10-06 20:01:44",
        "updatedAt": "2023-10-23 17:51:29",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 772,
        "submissionId": 993,
        "pathogenId": 6,
        "createdAt": "2023-10-06 20:01:44",
        "updatedAt": "2023-10-23 17:51:30",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 773,
        "submissionId": 995,
        "pathogenId": 5,
        "createdAt": "2023-10-06 20:02:12",
        "updatedAt": "2023-10-23 17:51:53",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 774,
        "submissionId": 995,
        "pathogenId": 6,
        "createdAt": "2023-10-06 20:02:12",
        "updatedAt": "2023-10-23 17:51:55",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 775,
        "submissionId": 999,
        "pathogenId": 5,
        "createdAt": "2023-10-06 20:02:40",
        "updatedAt": "2023-10-23 17:52:37",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 776,
        "submissionId": 999,
        "pathogenId": 6,
        "createdAt": "2023-10-06 20:02:40",
        "updatedAt": "2023-10-23 17:52:38",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 777,
        "submissionId": 1003,
        "pathogenId": 5,
        "createdAt": "2023-10-06 20:03:06",
        "updatedAt": "2023-10-23 17:53:05",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 778,
        "submissionId": 1003,
        "pathogenId": 6,
        "createdAt": "2023-10-06 20:03:06",
        "updatedAt": "2023-10-23 17:53:07",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 779,
        "submissionId": 1010,
        "pathogenId": 5,
        "createdAt": "2023-10-06 20:03:31",
        "updatedAt": "2023-10-23 17:35:44",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 780,
        "submissionId": 1010,
        "pathogenId": 6,
        "createdAt": "2023-10-06 20:03:31",
        "updatedAt": "2023-10-23 17:35:45",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 781,
        "submissionId": 1016,
        "pathogenId": 5,
        "createdAt": "2023-10-06 20:03:53",
        "updatedAt": "2023-10-23 17:53:51",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 782,
        "submissionId": 1016,
        "pathogenId": 6,
        "createdAt": "2023-10-06 20:03:53",
        "updatedAt": "2023-10-23 17:53:52",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 783,
        "submissionId": 1018,
        "pathogenId": 5,
        "createdAt": "2023-10-06 20:04:31",
        "updatedAt": "2023-10-23 17:54:49",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 784,
        "submissionId": 1018,
        "pathogenId": 6,
        "createdAt": "2023-10-06 20:04:31",
        "updatedAt": "2023-10-23 17:54:50",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 785,
        "submissionId": 1022,
        "pathogenId": 5,
        "createdAt": "2023-10-06 20:05:19",
        "updatedAt": "2023-10-23 17:55:19",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 786,
        "submissionId": 1022,
        "pathogenId": 6,
        "createdAt": "2023-10-06 20:05:19",
        "updatedAt": "2023-10-23 17:55:21",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 787,
        "submissionId": 1028,
        "pathogenId": 5,
        "createdAt": "2023-10-06 20:05:59",
        "updatedAt": "2023-10-23 17:56:11",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 788,
        "submissionId": 1028,
        "pathogenId": 6,
        "createdAt": "2023-10-06 20:05:59",
        "updatedAt": "2023-10-23 17:56:13",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 789,
        "submissionId": 1030,
        "pathogenId": 5,
        "createdAt": "2023-10-06 20:06:31",
        "updatedAt": "2023-10-23 17:56:53",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 790,
        "submissionId": 1030,
        "pathogenId": 6,
        "createdAt": "2023-10-06 20:06:31",
        "updatedAt": "2023-10-23 17:56:55",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 791,
        "submissionId": 1032,
        "pathogenId": 5,
        "createdAt": "2023-10-06 20:06:55",
        "updatedAt": "2023-10-23 17:36:14",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 792,
        "submissionId": 1032,
        "pathogenId": 6,
        "createdAt": "2023-10-06 20:06:55",
        "updatedAt": "2023-10-23 17:36:16",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 793,
        "submissionId": 1032,
        "pathogenId": 5,
        "createdAt": "2023-10-06 20:07:18",
        "updatedAt": "2023-10-23 17:36:14",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 794,
        "submissionId": 1032,
        "pathogenId": 6,
        "createdAt": "2023-10-06 20:07:18",
        "updatedAt": "2023-10-23 17:36:16",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 795,
        "submissionId": 1042,
        "pathogenId": 5,
        "createdAt": "2023-10-06 20:07:41",
        "updatedAt": "2023-10-23 17:57:40",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 796,
        "submissionId": 1042,
        "pathogenId": 6,
        "createdAt": "2023-10-06 20:07:41",
        "updatedAt": "2023-10-23 17:57:41",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 797,
        "submissionId": 1047,
        "pathogenId": 5,
        "createdAt": "2023-10-06 20:08:19",
        "updatedAt": "2023-10-23 17:37:10",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 798,
        "submissionId": 1047,
        "pathogenId": 6,
        "createdAt": "2023-10-06 20:08:19",
        "updatedAt": "2023-10-23 17:37:11",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 799,
        "submissionId": 1051,
        "pathogenId": 5,
        "createdAt": "2023-10-06 20:08:59",
        "updatedAt": "2023-10-23 17:58:12",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 800,
        "submissionId": 1051,
        "pathogenId": 6,
        "createdAt": "2023-10-06 20:08:59",
        "updatedAt": "2023-10-23 17:58:13",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 801,
        "submissionId": 1057,
        "pathogenId": 5,
        "createdAt": "2023-10-06 20:09:20",
        "updatedAt": "2023-10-23 17:59:34",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 802,
        "submissionId": 1057,
        "pathogenId": 6,
        "createdAt": "2023-10-06 20:09:20",
        "updatedAt": "2023-10-23 17:59:35",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 803,
        "submissionId": 1066,
        "pathogenId": 5,
        "createdAt": "2023-10-06 20:09:48",
        "updatedAt": "2023-10-23 18:00:13",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 804,
        "submissionId": 1066,
        "pathogenId": 6,
        "createdAt": "2023-10-06 20:09:48",
        "updatedAt": "2023-10-23 18:00:14",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 805,
        "submissionId": 1068,
        "pathogenId": 5,
        "createdAt": "2023-10-06 20:10:10",
        "updatedAt": "2023-10-23 18:00:53",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 806,
        "submissionId": 1068,
        "pathogenId": 6,
        "createdAt": "2023-10-06 20:10:10",
        "updatedAt": "2023-10-23 18:00:54",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 807,
        "submissionId": 1068,
        "pathogenId": 5,
        "createdAt": "2023-10-06 20:10:30",
        "updatedAt": "2023-10-23 18:00:53",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 808,
        "submissionId": 1068,
        "pathogenId": 6,
        "createdAt": "2023-10-06 20:10:30",
        "updatedAt": "2023-10-23 18:00:54",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 809,
        "submissionId": 1069,
        "pathogenId": 5,
        "createdAt": "2023-10-06 20:10:53",
        "updatedAt": "2023-10-23 18:01:27",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 810,
        "submissionId": 1069,
        "pathogenId": 6,
        "createdAt": "2023-10-06 20:10:53",
        "updatedAt": "2023-10-23 18:01:28",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 811,
        "submissionId": 1070,
        "pathogenId": 5,
        "createdAt": "2023-10-06 20:11:13",
        "updatedAt": "2023-10-23 18:01:52",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 812,
        "submissionId": 1070,
        "pathogenId": 6,
        "createdAt": "2023-10-06 20:11:13",
        "updatedAt": "2023-10-23 18:01:53",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 813,
        "submissionId": 1071,
        "pathogenId": 5,
        "createdAt": "2023-10-06 20:11:53",
        "updatedAt": "2023-10-23 18:02:20",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 814,
        "submissionId": 1071,
        "pathogenId": 6,
        "createdAt": "2023-10-06 20:11:53",
        "updatedAt": "2023-10-23 18:02:21",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 815,
        "submissionId": 1074,
        "pathogenId": 5,
        "createdAt": "2023-10-06 20:12:20",
        "updatedAt": "2023-10-23 17:37:58",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 816,
        "submissionId": 1074,
        "pathogenId": 6,
        "createdAt": "2023-10-06 20:12:20",
        "updatedAt": "2023-10-23 17:38:00",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 817,
        "submissionId": 1081,
        "pathogenId": 5,
        "createdAt": "2023-10-06 20:13:04",
        "updatedAt": "2023-10-23 18:03:48",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 818,
        "submissionId": 1081,
        "pathogenId": 6,
        "createdAt": "2023-10-06 20:13:04",
        "updatedAt": "2023-10-23 18:03:49",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 819,
        "submissionId": 1082,
        "pathogenId": 5,
        "createdAt": "2023-10-06 20:13:45",
        "updatedAt": "2023-10-23 17:39:07",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 820,
        "submissionId": 1082,
        "pathogenId": 6,
        "createdAt": "2023-10-06 20:13:45",
        "updatedAt": "2023-10-23 17:39:09",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 821,
        "submissionId": 1088,
        "pathogenId": 5,
        "createdAt": "2023-10-06 20:14:10",
        "updatedAt": "2023-10-23 17:39:35",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 822,
        "submissionId": 1088,
        "pathogenId": 6,
        "createdAt": "2023-10-06 20:14:10",
        "updatedAt": "2023-10-23 17:39:37",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 823,
        "submissionId": 1088,
        "pathogenId": 5,
        "createdAt": "2023-10-06 20:14:37",
        "updatedAt": "2023-10-23 17:39:35",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 824,
        "submissionId": 1088,
        "pathogenId": 6,
        "createdAt": "2023-10-06 20:14:37",
        "updatedAt": "2023-10-23 17:39:37",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 825,
        "submissionId": 1089,
        "pathogenId": 5,
        "createdAt": "2023-10-06 20:14:47",
        "updatedAt": "2023-10-23 17:41:44",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 826,
        "submissionId": 1089,
        "pathogenId": 6,
        "createdAt": "2023-10-06 20:14:47",
        "updatedAt": "2023-10-23 17:41:45",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 827,
        "submissionId": 1096,
        "pathogenId": 5,
        "createdAt": "2023-10-06 20:15:09",
        "updatedAt": "2023-10-23 17:40:48",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 828,
        "submissionId": 1096,
        "pathogenId": 6,
        "createdAt": "2023-10-06 20:15:09",
        "updatedAt": "2023-10-23 17:40:50",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 829,
        "submissionId": 1097,
        "pathogenId": 5,
        "createdAt": "2023-10-06 20:15:33",
        "updatedAt": "2023-10-23 17:43:19",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 830,
        "submissionId": 1097,
        "pathogenId": 6,
        "createdAt": "2023-10-06 20:15:33",
        "updatedAt": "2023-10-23 17:43:20",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 831,
        "submissionId": 1099,
        "pathogenId": 5,
        "createdAt": "2023-10-06 20:15:56",
        "updatedAt": "2023-10-23 17:43:49",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 832,
        "submissionId": 1099,
        "pathogenId": 6,
        "createdAt": "2023-10-06 20:15:56",
        "updatedAt": "2023-10-23 17:43:50",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 833,
        "submissionId": 1100,
        "pathogenId": 5,
        "createdAt": "2023-10-06 20:16:21",
        "updatedAt": "2023-10-23 17:44:25",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 834,
        "submissionId": 1100,
        "pathogenId": 6,
        "createdAt": "2023-10-06 20:16:21",
        "updatedAt": "2023-10-23 17:44:26",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 835,
        "submissionId": 1102,
        "pathogenId": 5,
        "createdAt": "2023-10-06 20:16:42",
        "updatedAt": "2023-10-23 17:34:01",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 836,
        "submissionId": 1102,
        "pathogenId": 6,
        "createdAt": "2023-10-06 20:16:42",
        "updatedAt": "2023-10-23 17:34:02",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 837,
        "submissionId": 1109,
        "pathogenId": 5,
        "createdAt": "2023-10-06 20:17:04",
        "updatedAt": "2023-10-23 17:45:04",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 838,
        "submissionId": 1109,
        "pathogenId": 6,
        "createdAt": "2023-10-06 20:17:04",
        "updatedAt": "2023-10-23 17:45:05",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 839,
        "submissionId": 1110,
        "pathogenId": 5,
        "createdAt": "2023-10-06 20:17:24",
        "updatedAt": "2023-10-23 17:45:31",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 840,
        "submissionId": 1110,
        "pathogenId": 6,
        "createdAt": "2023-10-06 20:17:24",
        "updatedAt": "2023-10-23 17:45:33",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 841,
        "submissionId": 458,
        "pathogenId": 1,
        "createdAt": "2023-10-06 21:23:44",
        "updatedAt": "2023-10-06 21:23:44",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "pending"
      },
      {
        "id": 842,
        "submissionId": 458,
        "pathogenId": 3,
        "createdAt": "2023-10-06 21:23:44",
        "updatedAt": "2023-10-06 21:23:44",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "pending"
      },
      {
        "id": 843,
        "submissionId": 458,
        "pathogenId": 4,
        "createdAt": "2023-10-06 21:23:44",
        "updatedAt": "2023-10-06 21:23:44",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "pending"
      },
      {
        "id": 844,
        "submissionId": 458,
        "pathogenId": 2,
        "createdAt": "2023-10-06 21:23:44",
        "updatedAt": "2023-10-23 14:36:32",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 845,
        "submissionId": 460,
        "pathogenId": 1,
        "createdAt": "2023-10-06 21:27:09",
        "updatedAt": "2023-10-23 14:40:25",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 846,
        "submissionId": 460,
        "pathogenId": 3,
        "createdAt": "2023-10-06 21:27:09",
        "updatedAt": "2023-10-23 14:40:30",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 847,
        "submissionId": 460,
        "pathogenId": 4,
        "createdAt": "2023-10-06 21:27:09",
        "updatedAt": "2023-10-23 14:40:44",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 848,
        "submissionId": 460,
        "pathogenId": 2,
        "createdAt": "2023-10-06 21:27:09",
        "updatedAt": "2023-10-23 14:40:46",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 849,
        "submissionId": 480,
        "pathogenId": 1,
        "createdAt": "2023-10-06 21:27:37",
        "updatedAt": "2023-10-06 21:27:37",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "pending"
      },
      {
        "id": 850,
        "submissionId": 480,
        "pathogenId": 3,
        "createdAt": "2023-10-06 21:27:37",
        "updatedAt": "2023-10-06 21:27:37",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "pending"
      },
      {
        "id": 851,
        "submissionId": 480,
        "pathogenId": 4,
        "createdAt": "2023-10-06 21:27:37",
        "updatedAt": "2023-10-23 15:41:15",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 852,
        "submissionId": 480,
        "pathogenId": 2,
        "createdAt": "2023-10-06 21:27:37",
        "updatedAt": "2023-10-23 15:40:45",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 853,
        "submissionId": 482,
        "pathogenId": 1,
        "createdAt": "2023-10-06 21:28:04",
        "updatedAt": "2023-10-06 21:28:04",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "pending"
      },
      {
        "id": 854,
        "submissionId": 482,
        "pathogenId": 3,
        "createdAt": "2023-10-06 21:28:04",
        "updatedAt": "2023-10-06 21:28:04",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "pending"
      },
      {
        "id": 855,
        "submissionId": 482,
        "pathogenId": 4,
        "createdAt": "2023-10-06 21:28:04",
        "updatedAt": "2023-10-06 21:28:04",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "pending"
      },
      {
        "id": 856,
        "submissionId": 482,
        "pathogenId": 2,
        "createdAt": "2023-10-06 21:28:04",
        "updatedAt": "2023-10-23 15:44:05",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 857,
        "submissionId": 490,
        "pathogenId": 1,
        "createdAt": "2023-10-06 21:28:35",
        "updatedAt": "2023-10-06 21:28:35",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "pending"
      },
      {
        "id": 858,
        "submissionId": 490,
        "pathogenId": 3,
        "createdAt": "2023-10-06 21:28:35",
        "updatedAt": "2023-10-06 21:28:35",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "pending"
      },
      {
        "id": 859,
        "submissionId": 490,
        "pathogenId": 4,
        "createdAt": "2023-10-06 21:28:35",
        "updatedAt": "2023-10-23 15:56:26",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 860,
        "submissionId": 490,
        "pathogenId": 2,
        "createdAt": "2023-10-06 21:28:35",
        "updatedAt": "2023-10-23 15:55:58",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 861,
        "submissionId": 493,
        "pathogenId": 1,
        "createdAt": "2023-10-06 21:29:02",
        "updatedAt": "2023-10-23 15:58:37",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 862,
        "submissionId": 493,
        "pathogenId": 3,
        "createdAt": "2023-10-06 21:29:02",
        "updatedAt": "2023-10-23 15:59:49",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 863,
        "submissionId": 493,
        "pathogenId": 4,
        "createdAt": "2023-10-06 21:29:02",
        "updatedAt": "2023-10-23 15:59:47",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 864,
        "submissionId": 493,
        "pathogenId": 2,
        "createdAt": "2023-10-06 21:29:02",
        "updatedAt": "2023-10-23 15:59:11",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 865,
        "submissionId": 610,
        "pathogenId": 1,
        "createdAt": "2023-10-06 21:29:48",
        "updatedAt": "2023-10-23 16:06:10",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 866,
        "submissionId": 610,
        "pathogenId": 3,
        "createdAt": "2023-10-06 21:29:48",
        "updatedAt": "2023-10-23 16:09:35",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 867,
        "submissionId": 610,
        "pathogenId": 4,
        "createdAt": "2023-10-06 21:29:48",
        "updatedAt": "2023-10-23 16:09:33",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 868,
        "submissionId": 610,
        "pathogenId": 2,
        "createdAt": "2023-10-06 21:29:48",
        "updatedAt": "2023-10-23 16:06:54",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 869,
        "submissionId": 969,
        "pathogenId": 1,
        "createdAt": "2023-10-06 21:30:20",
        "updatedAt": "2023-10-23 16:15:02",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 870,
        "submissionId": 969,
        "pathogenId": 3,
        "createdAt": "2023-10-06 21:30:20",
        "updatedAt": "2023-10-23 16:15:21",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 871,
        "submissionId": 969,
        "pathogenId": 4,
        "createdAt": "2023-10-06 21:30:20",
        "updatedAt": "2023-10-23 16:15:36",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 872,
        "submissionId": 969,
        "pathogenId": 2,
        "createdAt": "2023-10-06 21:30:20",
        "updatedAt": "2023-10-23 16:15:51",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 873,
        "submissionId": 988,
        "pathogenId": 1,
        "createdAt": "2023-10-06 21:30:46",
        "updatedAt": "2023-10-23 14:52:01",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "positive"
      },
      {
        "id": 874,
        "submissionId": 988,
        "pathogenId": 3,
        "createdAt": "2023-10-06 21:30:46",
        "updatedAt": "2023-10-23 14:52:03",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 875,
        "submissionId": 988,
        "pathogenId": 4,
        "createdAt": "2023-10-06 21:30:46",
        "updatedAt": "2023-10-23 14:52:05",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "positive"
      },
      {
        "id": 876,
        "submissionId": 988,
        "pathogenId": 2,
        "createdAt": "2023-10-06 21:30:46",
        "updatedAt": "2023-10-23 14:52:08",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 877,
        "submissionId": 989,
        "pathogenId": 1,
        "createdAt": "2023-10-06 21:31:24",
        "updatedAt": "2023-10-23 14:52:32",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 878,
        "submissionId": 989,
        "pathogenId": 3,
        "createdAt": "2023-10-06 21:31:24",
        "updatedAt": "2023-10-23 14:52:34",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 879,
        "submissionId": 989,
        "pathogenId": 4,
        "createdAt": "2023-10-06 21:31:24",
        "updatedAt": "2023-10-23 14:52:36",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 880,
        "submissionId": 989,
        "pathogenId": 2,
        "createdAt": "2023-10-06 21:31:24",
        "updatedAt": "2023-10-23 14:52:37",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 881,
        "submissionId": 1036,
        "pathogenId": 1,
        "createdAt": "2023-10-06 21:32:09",
        "updatedAt": "2023-10-23 16:22:03",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 882,
        "submissionId": 1036,
        "pathogenId": 3,
        "createdAt": "2023-10-06 21:32:09",
        "updatedAt": "2023-10-23 16:22:05",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 883,
        "submissionId": 1036,
        "pathogenId": 4,
        "createdAt": "2023-10-06 21:32:09",
        "updatedAt": "2023-10-23 16:22:07",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 884,
        "submissionId": 1036,
        "pathogenId": 2,
        "createdAt": "2023-10-06 21:32:09",
        "updatedAt": "2023-10-23 16:22:09",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 885,
        "submissionId": 1046,
        "pathogenId": 1,
        "createdAt": "2023-10-06 21:32:41",
        "updatedAt": "2023-10-23 16:24:11",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 886,
        "submissionId": 1046,
        "pathogenId": 3,
        "createdAt": "2023-10-06 21:32:41",
        "updatedAt": "2023-10-23 16:24:13",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 887,
        "submissionId": 1046,
        "pathogenId": 4,
        "createdAt": "2023-10-06 21:32:41",
        "updatedAt": "2023-10-23 16:24:15",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 888,
        "submissionId": 1046,
        "pathogenId": 2,
        "createdAt": "2023-10-06 21:32:41",
        "updatedAt": "2023-10-23 16:24:16",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 889,
        "submissionId": 1095,
        "pathogenId": 1,
        "createdAt": "2023-10-06 21:33:10",
        "updatedAt": "2023-10-06 21:33:10",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "pending"
      },
      {
        "id": 890,
        "submissionId": 1095,
        "pathogenId": 3,
        "createdAt": "2023-10-06 21:33:10",
        "updatedAt": "2023-10-06 21:33:10",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "pending"
      },
      {
        "id": 891,
        "submissionId": 1095,
        "pathogenId": 4,
        "createdAt": "2023-10-06 21:33:10",
        "updatedAt": "2023-10-23 16:31:26",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 892,
        "submissionId": 1095,
        "pathogenId": 2,
        "createdAt": "2023-10-06 21:33:10",
        "updatedAt": "2023-10-23 16:31:20",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "positive"
      },
      {
        "id": 893,
        "submissionId": 1103,
        "pathogenId": 1,
        "createdAt": "2023-10-06 21:33:35",
        "updatedAt": "2023-10-23 16:32:40",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 894,
        "submissionId": 1103,
        "pathogenId": 3,
        "createdAt": "2023-10-06 21:33:35",
        "updatedAt": "2023-10-23 16:32:41",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 895,
        "submissionId": 1103,
        "pathogenId": 4,
        "createdAt": "2023-10-06 21:33:35",
        "updatedAt": "2023-10-23 16:32:43",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 896,
        "submissionId": 1103,
        "pathogenId": 2,
        "createdAt": "2023-10-06 21:33:35",
        "updatedAt": "2023-10-23 16:32:44",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 897,
        "submissionId": 70,
        "pathogenId": 1,
        "createdAt": "2023-10-10 10:57:10",
        "updatedAt": "2023-10-10 10:57:20",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 898,
        "submissionId": 70,
        "pathogenId": 3,
        "createdAt": "2023-10-10 10:57:10",
        "updatedAt": "2023-10-10 10:57:22",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 899,
        "submissionId": 70,
        "pathogenId": 4,
        "createdAt": "2023-10-10 10:57:10",
        "updatedAt": "2023-10-10 10:57:24",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 900,
        "submissionId": 70,
        "pathogenId": 2,
        "createdAt": "2023-10-10 10:57:10",
        "updatedAt": "2023-10-23 14:27:48",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 901,
        "submissionId": 70,
        "pathogenId": 1,
        "createdAt": "2023-10-10 10:57:44",
        "updatedAt": "2023-10-10 10:57:44",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "pending"
      },
      {
        "id": 902,
        "submissionId": 70,
        "pathogenId": 3,
        "createdAt": "2023-10-10 10:57:44",
        "updatedAt": "2023-10-10 10:57:44",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "pending"
      },
      {
        "id": 903,
        "submissionId": 70,
        "pathogenId": 4,
        "createdAt": "2023-10-10 10:57:44",
        "updatedAt": "2023-10-10 10:57:44",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "pending"
      },
      {
        "id": 904,
        "submissionId": 70,
        "pathogenId": 2,
        "createdAt": "2023-10-10 10:57:44",
        "updatedAt": "2023-10-23 14:27:48",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 905,
        "submissionId": 70,
        "pathogenId": 1,
        "createdAt": "2023-10-10 10:58:04",
        "updatedAt": "2023-10-10 10:58:04",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "pending"
      },
      {
        "id": 906,
        "submissionId": 70,
        "pathogenId": 3,
        "createdAt": "2023-10-10 10:58:04",
        "updatedAt": "2023-10-10 10:58:04",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "pending"
      },
      {
        "id": 907,
        "submissionId": 70,
        "pathogenId": 4,
        "createdAt": "2023-10-10 10:58:04",
        "updatedAt": "2023-10-10 10:58:04",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "pending"
      },
      {
        "id": 908,
        "submissionId": 70,
        "pathogenId": 2,
        "createdAt": "2023-10-10 10:58:04",
        "updatedAt": "2023-10-23 14:27:48",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 909,
        "submissionId": 75,
        "pathogenId": 1,
        "createdAt": "2023-10-10 11:08:39",
        "updatedAt": "2023-10-10 11:08:39",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "pending"
      },
      {
        "id": 910,
        "submissionId": 75,
        "pathogenId": 3,
        "createdAt": "2023-10-10 11:08:39",
        "updatedAt": "2023-10-10 11:08:39",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "pending"
      },
      {
        "id": 911,
        "submissionId": 75,
        "pathogenId": 4,
        "createdAt": "2023-10-10 11:08:39",
        "updatedAt": "2023-10-10 11:08:39",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "pending"
      },
      {
        "id": 912,
        "submissionId": 75,
        "pathogenId": 2,
        "createdAt": "2023-10-10 11:08:39",
        "updatedAt": "2023-10-23 14:31:09",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 913,
        "submissionId": 980,
        "pathogenId": 1,
        "createdAt": "2023-10-10 13:31:51",
        "updatedAt": "2023-10-10 13:31:51",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "pending"
      },
      {
        "id": 914,
        "submissionId": 980,
        "pathogenId": 3,
        "createdAt": "2023-10-10 13:31:51",
        "updatedAt": "2023-10-10 13:31:51",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "pending"
      },
      {
        "id": 915,
        "submissionId": 980,
        "pathogenId": 4,
        "createdAt": "2023-10-10 13:31:51",
        "updatedAt": "2023-10-10 13:31:51",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "pending"
      },
      {
        "id": 916,
        "submissionId": 980,
        "pathogenId": 2,
        "createdAt": "2023-10-10 13:31:51",
        "updatedAt": "2023-10-23 16:17:19",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 917,
        "submissionId": 310,
        "pathogenId": 1,
        "createdAt": "2023-10-10 13:32:01",
        "updatedAt": "2023-10-10 13:32:01",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "pending"
      },
      {
        "id": 918,
        "submissionId": 310,
        "pathogenId": 3,
        "createdAt": "2023-10-10 13:32:01",
        "updatedAt": "2023-10-10 13:32:01",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "pending"
      },
      {
        "id": 919,
        "submissionId": 310,
        "pathogenId": 4,
        "createdAt": "2023-10-10 13:32:01",
        "updatedAt": "2023-10-10 13:32:01",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "pending"
      },
      {
        "id": 920,
        "submissionId": 310,
        "pathogenId": 2,
        "createdAt": "2023-10-10 13:32:01",
        "updatedAt": "2023-10-10 13:32:01",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "pending"
      },
      {
        "id": 921,
        "submissionId": 980,
        "pathogenId": 1,
        "createdAt": "2023-10-10 13:32:14",
        "updatedAt": "2023-10-10 13:32:14",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "pending"
      },
      {
        "id": 922,
        "submissionId": 980,
        "pathogenId": 3,
        "createdAt": "2023-10-10 13:32:14",
        "updatedAt": "2023-10-10 13:32:14",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "pending"
      },
      {
        "id": 923,
        "submissionId": 980,
        "pathogenId": 4,
        "createdAt": "2023-10-10 13:32:14",
        "updatedAt": "2023-10-10 13:32:14",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "pending"
      },
      {
        "id": 924,
        "submissionId": 980,
        "pathogenId": 2,
        "createdAt": "2023-10-10 13:32:14",
        "updatedAt": "2023-10-23 16:17:19",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 925,
        "submissionId": 70,
        "pathogenId": 1,
        "createdAt": "2023-10-10 13:36:07",
        "updatedAt": "2023-10-10 13:36:07",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "pending"
      },
      {
        "id": 926,
        "submissionId": 70,
        "pathogenId": 3,
        "createdAt": "2023-10-10 13:36:07",
        "updatedAt": "2023-10-10 13:36:07",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "pending"
      },
      {
        "id": 927,
        "submissionId": 70,
        "pathogenId": 4,
        "createdAt": "2023-10-10 13:36:07",
        "updatedAt": "2023-10-10 13:36:07",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "pending"
      },
      {
        "id": 928,
        "submissionId": 70,
        "pathogenId": 2,
        "createdAt": "2023-10-10 13:36:07",
        "updatedAt": "2023-10-23 14:27:48",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 929,
        "submissionId": 468,
        "pathogenId": 1,
        "createdAt": "2023-10-10 13:37:55",
        "updatedAt": "2023-10-10 13:37:55",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "pending"
      },
      {
        "id": 930,
        "submissionId": 468,
        "pathogenId": 3,
        "createdAt": "2023-10-10 13:37:55",
        "updatedAt": "2023-10-10 13:37:55",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "pending"
      },
      {
        "id": 931,
        "submissionId": 468,
        "pathogenId": 4,
        "createdAt": "2023-10-10 13:37:55",
        "updatedAt": "2023-10-10 13:37:55",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "pending"
      },
      {
        "id": 932,
        "submissionId": 468,
        "pathogenId": 2,
        "createdAt": "2023-10-10 13:37:55",
        "updatedAt": "2023-10-23 15:23:59",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 933,
        "submissionId": 980,
        "pathogenId": 1,
        "createdAt": "2023-10-10 13:42:10",
        "updatedAt": "2023-10-10 13:42:10",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "pending"
      },
      {
        "id": 934,
        "submissionId": 980,
        "pathogenId": 3,
        "createdAt": "2023-10-10 13:42:10",
        "updatedAt": "2023-10-10 13:42:10",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "pending"
      },
      {
        "id": 935,
        "submissionId": 980,
        "pathogenId": 4,
        "createdAt": "2023-10-10 13:42:10",
        "updatedAt": "2023-10-10 13:42:10",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "pending"
      },
      {
        "id": 936,
        "submissionId": 980,
        "pathogenId": 2,
        "createdAt": "2023-10-10 13:42:10",
        "updatedAt": "2023-10-23 16:17:19",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 937,
        "submissionId": 468,
        "pathogenId": 1,
        "createdAt": "2023-10-10 13:42:29",
        "updatedAt": "2023-10-10 13:42:29",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "pending"
      },
      {
        "id": 938,
        "submissionId": 468,
        "pathogenId": 3,
        "createdAt": "2023-10-10 13:42:29",
        "updatedAt": "2023-10-10 13:42:29",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "pending"
      },
      {
        "id": 939,
        "submissionId": 468,
        "pathogenId": 4,
        "createdAt": "2023-10-10 13:42:29",
        "updatedAt": "2023-10-10 13:42:29",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "pending"
      },
      {
        "id": 940,
        "submissionId": 468,
        "pathogenId": 2,
        "createdAt": "2023-10-10 13:42:29",
        "updatedAt": "2023-10-23 15:23:59",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 941,
        "submissionId": 471,
        "pathogenId": 1,
        "createdAt": "2023-10-10 13:42:51",
        "updatedAt": "2023-10-10 13:42:51",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "pending"
      },
      {
        "id": 942,
        "submissionId": 471,
        "pathogenId": 3,
        "createdAt": "2023-10-10 13:42:51",
        "updatedAt": "2023-10-10 13:42:51",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "pending"
      },
      {
        "id": 943,
        "submissionId": 471,
        "pathogenId": 4,
        "createdAt": "2023-10-10 13:42:51",
        "updatedAt": "2023-10-10 13:42:51",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "pending"
      },
      {
        "id": 944,
        "submissionId": 471,
        "pathogenId": 2,
        "createdAt": "2023-10-10 13:42:51",
        "updatedAt": "2023-10-23 15:24:40",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 945,
        "submissionId": 476,
        "pathogenId": 1,
        "createdAt": "2023-10-10 13:43:18",
        "updatedAt": "2023-10-10 13:43:18",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "pending"
      },
      {
        "id": 946,
        "submissionId": 476,
        "pathogenId": 3,
        "createdAt": "2023-10-10 13:43:18",
        "updatedAt": "2023-10-10 13:43:18",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "pending"
      },
      {
        "id": 947,
        "submissionId": 476,
        "pathogenId": 4,
        "createdAt": "2023-10-10 13:43:18",
        "updatedAt": "2023-10-10 13:43:18",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "pending"
      },
      {
        "id": 948,
        "submissionId": 476,
        "pathogenId": 2,
        "createdAt": "2023-10-10 13:43:18",
        "updatedAt": "2023-10-23 15:28:19",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 949,
        "submissionId": 980,
        "pathogenId": 1,
        "createdAt": "2023-10-10 14:07:09",
        "updatedAt": "2023-10-10 14:07:09",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "pending"
      },
      {
        "id": 950,
        "submissionId": 980,
        "pathogenId": 3,
        "createdAt": "2023-10-10 14:07:09",
        "updatedAt": "2023-10-10 14:07:09",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "pending"
      },
      {
        "id": 951,
        "submissionId": 980,
        "pathogenId": 4,
        "createdAt": "2023-10-10 14:07:09",
        "updatedAt": "2023-10-10 14:07:09",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "pending"
      },
      {
        "id": 952,
        "submissionId": 980,
        "pathogenId": 2,
        "createdAt": "2023-10-10 14:07:09",
        "updatedAt": "2023-10-23 16:17:19",
        "deletedAt": "2023-10-10 15:10:40",
        "result": "negative"
      },
      {
        "id": 953,
        "submissionId": 1119,
        "pathogenId": 1,
        "createdAt": "2023-10-10 19:11:45",
        "updatedAt": "2023-10-26 21:08:05",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 954,
        "submissionId": 1119,
        "pathogenId": 3,
        "createdAt": "2023-10-10 19:11:45",
        "updatedAt": "2023-10-26 21:08:17",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 955,
        "submissionId": 1119,
        "pathogenId": 4,
        "createdAt": "2023-10-10 19:11:45",
        "updatedAt": "2023-10-26 21:08:24",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 956,
        "submissionId": 1119,
        "pathogenId": 2,
        "createdAt": "2023-10-10 19:11:45",
        "updatedAt": "2023-10-26 21:08:12",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 957,
        "submissionId": 1119,
        "pathogenId": 1,
        "createdAt": "2023-10-10 19:16:37",
        "updatedAt": "2023-10-26 21:08:05",
        "deletedAt": "2023-10-10 15:20:45",
        "result": "negative"
      },
      {
        "id": 958,
        "submissionId": 1119,
        "pathogenId": 3,
        "createdAt": "2023-10-10 19:16:37",
        "updatedAt": "2023-10-26 21:08:17",
        "deletedAt": "2023-10-10 15:20:45",
        "result": "negative"
      },
      {
        "id": 959,
        "submissionId": 1119,
        "pathogenId": 4,
        "createdAt": "2023-10-10 19:16:37",
        "updatedAt": "2023-10-26 21:08:24",
        "deletedAt": "2023-10-10 15:20:45",
        "result": "negative"
      },
      {
        "id": 960,
        "submissionId": 1119,
        "pathogenId": 2,
        "createdAt": "2023-10-10 19:16:37",
        "updatedAt": "2023-10-26 21:08:12",
        "deletedAt": "2023-10-10 15:20:45",
        "result": "negative"
      },
      {
        "id": 961,
        "submissionId": 43,
        "pathogenId": 5,
        "createdAt": "2023-10-10 19:16:46",
        "updatedAt": "2023-10-23 17:03:48",
        "deletedAt": "2023-10-10 15:20:45",
        "result": "negative"
      },
      {
        "id": 962,
        "submissionId": 43,
        "pathogenId": 6,
        "createdAt": "2023-10-10 19:16:46",
        "updatedAt": "2023-10-23 17:03:49",
        "deletedAt": "2023-10-10 15:20:45",
        "result": "negative"
      },
      {
        "id": 963,
        "submissionId": 70,
        "pathogenId": 1,
        "createdAt": "2023-10-10 19:17:02",
        "updatedAt": "2023-10-10 19:17:02",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "pending"
      },
      {
        "id": 964,
        "submissionId": 70,
        "pathogenId": 3,
        "createdAt": "2023-10-10 19:17:02",
        "updatedAt": "2023-10-10 19:17:02",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "pending"
      },
      {
        "id": 965,
        "submissionId": 70,
        "pathogenId": 4,
        "createdAt": "2023-10-10 19:17:02",
        "updatedAt": "2023-10-10 19:17:02",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "pending"
      },
      {
        "id": 966,
        "submissionId": 70,
        "pathogenId": 2,
        "createdAt": "2023-10-10 19:17:02",
        "updatedAt": "2023-10-23 14:27:48",
        "deletedAt": "2023-10-10 15:21:55",
        "result": "negative"
      },
      {
        "id": 967,
        "submissionId": 70,
        "pathogenId": 1,
        "createdAt": "2023-10-10 19:18:45",
        "updatedAt": "2023-10-10 19:18:45",
        "deletedAt": "2023-10-10 15:20:45",
        "result": "pending"
      },
      {
        "id": 968,
        "submissionId": 70,
        "pathogenId": 3,
        "createdAt": "2023-10-10 19:18:45",
        "updatedAt": "2023-10-10 19:18:45",
        "deletedAt": "2023-10-10 15:20:45",
        "result": "pending"
      },
      {
        "id": 969,
        "submissionId": 70,
        "pathogenId": 4,
        "createdAt": "2023-10-10 19:18:45",
        "updatedAt": "2023-10-10 19:18:45",
        "deletedAt": "2023-10-10 15:20:45",
        "result": "pending"
      },
      {
        "id": 970,
        "submissionId": 70,
        "pathogenId": 2,
        "createdAt": "2023-10-10 19:18:45",
        "updatedAt": "2023-10-23 14:27:48",
        "deletedAt": "2023-10-10 15:20:45",
        "result": "negative"
      },
      {
        "id": 971,
        "submissionId": 70,
        "pathogenId": 1,
        "createdAt": "2023-10-10 19:25:39",
        "updatedAt": "2023-10-10 19:25:39",
        "deletedAt": null,
        "result": "pending"
      },
      {
        "id": 972,
        "submissionId": 70,
        "pathogenId": 3,
        "createdAt": "2023-10-10 19:25:39",
        "updatedAt": "2023-10-10 19:25:39",
        "deletedAt": null,
        "result": "pending"
      },
      {
        "id": 973,
        "submissionId": 70,
        "pathogenId": 4,
        "createdAt": "2023-10-10 19:25:39",
        "updatedAt": "2023-10-10 19:25:39",
        "deletedAt": null,
        "result": "pending"
      },
      {
        "id": 974,
        "submissionId": 70,
        "pathogenId": 2,
        "createdAt": "2023-10-10 19:25:39",
        "updatedAt": "2023-10-23 14:27:48",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 975,
        "submissionId": 980,
        "pathogenId": 1,
        "createdAt": "2023-10-10 19:26:03",
        "updatedAt": "2023-10-10 19:26:03",
        "deletedAt": null,
        "result": "pending"
      },
      {
        "id": 976,
        "submissionId": 980,
        "pathogenId": 3,
        "createdAt": "2023-10-10 19:26:03",
        "updatedAt": "2023-10-10 19:26:03",
        "deletedAt": null,
        "result": "pending"
      },
      {
        "id": 977,
        "submissionId": 980,
        "pathogenId": 4,
        "createdAt": "2023-10-10 19:26:03",
        "updatedAt": "2023-10-10 19:26:03",
        "deletedAt": null,
        "result": "pending"
      },
      {
        "id": 978,
        "submissionId": 980,
        "pathogenId": 2,
        "createdAt": "2023-10-10 19:26:03",
        "updatedAt": "2023-10-23 16:17:19",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 979,
        "submissionId": 1119,
        "pathogenId": 1,
        "createdAt": "2023-10-11 20:07:00",
        "updatedAt": "2023-10-26 21:08:05",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 980,
        "submissionId": 1119,
        "pathogenId": 3,
        "createdAt": "2023-10-11 20:07:00",
        "updatedAt": "2023-10-26 21:08:17",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 981,
        "submissionId": 1119,
        "pathogenId": 4,
        "createdAt": "2023-10-11 20:07:00",
        "updatedAt": "2023-10-26 21:08:24",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 982,
        "submissionId": 1119,
        "pathogenId": 2,
        "createdAt": "2023-10-11 20:07:00",
        "updatedAt": "2023-10-26 21:08:12",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 983,
        "submissionId": 1095,
        "pathogenId": 1,
        "createdAt": "2023-10-12 16:15:34",
        "updatedAt": "2023-10-12 16:15:34",
        "deletedAt": null,
        "result": "pending"
      },
      {
        "id": 984,
        "submissionId": 1095,
        "pathogenId": 3,
        "createdAt": "2023-10-12 16:15:34",
        "updatedAt": "2023-10-12 16:15:34",
        "deletedAt": null,
        "result": "pending"
      },
      {
        "id": 985,
        "submissionId": 1095,
        "pathogenId": 4,
        "createdAt": "2023-10-12 16:15:34",
        "updatedAt": "2023-10-23 16:31:26",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 986,
        "submissionId": 1095,
        "pathogenId": 2,
        "createdAt": "2023-10-12 16:15:34",
        "updatedAt": "2023-10-23 16:31:20",
        "deletedAt": null,
        "result": "positive"
      },
      {
        "id": 987,
        "submissionId": 1122,
        "pathogenId": 1,
        "createdAt": "2023-10-12 16:40:27",
        "updatedAt": "2023-10-26 21:10:47",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 988,
        "submissionId": 1122,
        "pathogenId": 3,
        "createdAt": "2023-10-12 16:40:27",
        "updatedAt": "2023-10-26 21:10:58",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 989,
        "submissionId": 1122,
        "pathogenId": 4,
        "createdAt": "2023-10-12 16:40:27",
        "updatedAt": "2023-10-26 21:11:08",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 990,
        "submissionId": 1122,
        "pathogenId": 2,
        "createdAt": "2023-10-12 16:40:27",
        "updatedAt": "2023-10-26 21:10:52",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 991,
        "submissionId": 1124,
        "pathogenId": 1,
        "createdAt": "2023-10-12 16:48:45",
        "updatedAt": "2023-10-26 21:16:24",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 992,
        "submissionId": 1124,
        "pathogenId": 3,
        "createdAt": "2023-10-12 16:48:45",
        "updatedAt": "2023-10-26 21:16:53",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 993,
        "submissionId": 1124,
        "pathogenId": 4,
        "createdAt": "2023-10-12 16:48:45",
        "updatedAt": "2023-10-26 21:17:01",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 994,
        "submissionId": 1124,
        "pathogenId": 2,
        "createdAt": "2023-10-12 16:48:45",
        "updatedAt": "2023-10-26 21:16:43",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 995,
        "submissionId": 1123,
        "pathogenId": 1,
        "createdAt": "2023-10-12 16:52:08",
        "updatedAt": "2023-10-26 21:12:52",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 996,
        "submissionId": 1123,
        "pathogenId": 3,
        "createdAt": "2023-10-12 16:52:08",
        "updatedAt": "2023-10-26 21:13:21",
        "deletedAt": null,
        "result": "positive"
      },
      {
        "id": 997,
        "submissionId": 1123,
        "pathogenId": 4,
        "createdAt": "2023-10-12 16:52:08",
        "updatedAt": "2023-10-26 21:13:47",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 998,
        "submissionId": 1123,
        "pathogenId": 2,
        "createdAt": "2023-10-12 16:52:08",
        "updatedAt": "2023-10-26 21:12:56",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 999,
        "submissionId": 1125,
        "pathogenId": 1,
        "createdAt": "2023-10-12 16:59:44",
        "updatedAt": "2023-10-26 21:19:55",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1000,
        "submissionId": 1125,
        "pathogenId": 3,
        "createdAt": "2023-10-12 16:59:44",
        "updatedAt": "2023-10-26 21:20:19",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1001,
        "submissionId": 1125,
        "pathogenId": 4,
        "createdAt": "2023-10-12 16:59:44",
        "updatedAt": "2023-10-26 21:20:35",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1002,
        "submissionId": 1125,
        "pathogenId": 2,
        "createdAt": "2023-10-12 16:59:44",
        "updatedAt": "2023-10-26 21:20:04",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1003,
        "submissionId": 1103,
        "pathogenId": 1,
        "createdAt": "2023-10-13 20:58:22",
        "updatedAt": "2023-10-23 16:32:40",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1004,
        "submissionId": 1103,
        "pathogenId": 3,
        "createdAt": "2023-10-13 20:58:22",
        "updatedAt": "2023-10-23 16:32:41",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1005,
        "submissionId": 1103,
        "pathogenId": 4,
        "createdAt": "2023-10-13 20:58:22",
        "updatedAt": "2023-10-23 16:32:43",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1006,
        "submissionId": 1103,
        "pathogenId": 2,
        "createdAt": "2023-10-13 20:58:22",
        "updatedAt": "2023-10-23 16:32:44",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1007,
        "submissionId": 461,
        "pathogenId": 1,
        "createdAt": "2023-10-18 14:38:24",
        "updatedAt": "2023-10-18 14:38:24",
        "deletedAt": null,
        "result": "pending"
      },
      {
        "id": 1008,
        "submissionId": 461,
        "pathogenId": 3,
        "createdAt": "2023-10-18 14:38:24",
        "updatedAt": "2023-10-18 14:38:24",
        "deletedAt": null,
        "result": "pending"
      },
      {
        "id": 1009,
        "submissionId": 461,
        "pathogenId": 4,
        "createdAt": "2023-10-18 14:38:24",
        "updatedAt": "2023-10-18 14:38:24",
        "deletedAt": null,
        "result": "pending"
      },
      {
        "id": 1010,
        "submissionId": 461,
        "pathogenId": 2,
        "createdAt": "2023-10-18 14:38:24",
        "updatedAt": "2023-10-23 14:50:18",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1011,
        "submissionId": 463,
        "pathogenId": 1,
        "createdAt": "2023-10-18 14:41:14",
        "updatedAt": "2023-10-18 14:41:14",
        "deletedAt": null,
        "result": "pending"
      },
      {
        "id": 1012,
        "submissionId": 463,
        "pathogenId": 3,
        "createdAt": "2023-10-18 14:41:14",
        "updatedAt": "2023-10-18 14:41:14",
        "deletedAt": null,
        "result": "pending"
      },
      {
        "id": 1013,
        "submissionId": 463,
        "pathogenId": 4,
        "createdAt": "2023-10-18 14:41:14",
        "updatedAt": "2023-10-18 14:41:14",
        "deletedAt": null,
        "result": "pending"
      },
      {
        "id": 1014,
        "submissionId": 463,
        "pathogenId": 2,
        "createdAt": "2023-10-18 14:41:14",
        "updatedAt": "2023-10-23 15:20:32",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1015,
        "submissionId": 464,
        "pathogenId": 1,
        "createdAt": "2023-10-18 14:42:21",
        "updatedAt": "2023-10-18 14:42:21",
        "deletedAt": null,
        "result": "pending"
      },
      {
        "id": 1016,
        "submissionId": 464,
        "pathogenId": 3,
        "createdAt": "2023-10-18 14:42:21",
        "updatedAt": "2023-10-18 14:42:21",
        "deletedAt": null,
        "result": "pending"
      },
      {
        "id": 1017,
        "submissionId": 464,
        "pathogenId": 4,
        "createdAt": "2023-10-18 14:42:21",
        "updatedAt": "2023-10-18 14:42:21",
        "deletedAt": null,
        "result": "pending"
      },
      {
        "id": 1018,
        "submissionId": 464,
        "pathogenId": 2,
        "createdAt": "2023-10-18 14:42:21",
        "updatedAt": "2023-10-23 15:21:19",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1019,
        "submissionId": 468,
        "pathogenId": 1,
        "createdAt": "2023-10-18 14:43:17",
        "updatedAt": "2023-10-18 14:43:17",
        "deletedAt": null,
        "result": "pending"
      },
      {
        "id": 1020,
        "submissionId": 468,
        "pathogenId": 3,
        "createdAt": "2023-10-18 14:43:17",
        "updatedAt": "2023-10-18 14:43:17",
        "deletedAt": null,
        "result": "pending"
      },
      {
        "id": 1021,
        "submissionId": 468,
        "pathogenId": 4,
        "createdAt": "2023-10-18 14:43:17",
        "updatedAt": "2023-10-18 14:43:17",
        "deletedAt": null,
        "result": "pending"
      },
      {
        "id": 1022,
        "submissionId": 468,
        "pathogenId": 2,
        "createdAt": "2023-10-18 14:43:17",
        "updatedAt": "2023-10-23 15:23:59",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1023,
        "submissionId": 471,
        "pathogenId": 1,
        "createdAt": "2023-10-18 14:44:42",
        "updatedAt": "2023-10-18 14:44:42",
        "deletedAt": null,
        "result": "pending"
      },
      {
        "id": 1024,
        "submissionId": 471,
        "pathogenId": 3,
        "createdAt": "2023-10-18 14:44:42",
        "updatedAt": "2023-10-18 14:44:42",
        "deletedAt": null,
        "result": "pending"
      },
      {
        "id": 1025,
        "submissionId": 471,
        "pathogenId": 4,
        "createdAt": "2023-10-18 14:44:42",
        "updatedAt": "2023-10-18 14:44:42",
        "deletedAt": null,
        "result": "pending"
      },
      {
        "id": 1026,
        "submissionId": 471,
        "pathogenId": 2,
        "createdAt": "2023-10-18 14:44:42",
        "updatedAt": "2023-10-23 15:24:40",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1027,
        "submissionId": 474,
        "pathogenId": 1,
        "createdAt": "2023-10-18 14:45:41",
        "updatedAt": "2023-10-18 14:45:41",
        "deletedAt": null,
        "result": "pending"
      },
      {
        "id": 1028,
        "submissionId": 474,
        "pathogenId": 3,
        "createdAt": "2023-10-18 14:45:41",
        "updatedAt": "2023-10-18 14:45:41",
        "deletedAt": null,
        "result": "pending"
      },
      {
        "id": 1029,
        "submissionId": 474,
        "pathogenId": 4,
        "createdAt": "2023-10-18 14:45:41",
        "updatedAt": "2023-10-18 14:45:41",
        "deletedAt": null,
        "result": "pending"
      },
      {
        "id": 1030,
        "submissionId": 474,
        "pathogenId": 2,
        "createdAt": "2023-10-18 14:45:41",
        "updatedAt": "2023-10-23 15:26:50",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1031,
        "submissionId": 488,
        "pathogenId": 1,
        "createdAt": "2023-10-18 14:52:52",
        "updatedAt": "2023-10-18 14:52:52",
        "deletedAt": null,
        "result": "pending"
      },
      {
        "id": 1032,
        "submissionId": 488,
        "pathogenId": 3,
        "createdAt": "2023-10-18 14:52:52",
        "updatedAt": "2023-10-18 14:52:52",
        "deletedAt": null,
        "result": "pending"
      },
      {
        "id": 1033,
        "submissionId": 488,
        "pathogenId": 4,
        "createdAt": "2023-10-18 14:52:52",
        "updatedAt": "2023-10-18 14:52:52",
        "deletedAt": null,
        "result": "pending"
      },
      {
        "id": 1034,
        "submissionId": 488,
        "pathogenId": 2,
        "createdAt": "2023-10-18 14:52:52",
        "updatedAt": "2023-10-23 15:50:43",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1035,
        "submissionId": 491,
        "pathogenId": 1,
        "createdAt": "2023-10-18 14:54:02",
        "updatedAt": "2023-10-18 14:54:02",
        "deletedAt": null,
        "result": "pending"
      },
      {
        "id": 1036,
        "submissionId": 491,
        "pathogenId": 3,
        "createdAt": "2023-10-18 14:54:02",
        "updatedAt": "2023-10-18 14:54:02",
        "deletedAt": null,
        "result": "pending"
      },
      {
        "id": 1037,
        "submissionId": 491,
        "pathogenId": 4,
        "createdAt": "2023-10-18 14:54:02",
        "updatedAt": "2023-10-18 14:54:02",
        "deletedAt": null,
        "result": "pending"
      },
      {
        "id": 1038,
        "submissionId": 491,
        "pathogenId": 2,
        "createdAt": "2023-10-18 14:54:02",
        "updatedAt": "2023-10-23 15:56:50",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1039,
        "submissionId": 492,
        "pathogenId": 1,
        "createdAt": "2023-10-18 14:54:56",
        "updatedAt": "2023-10-18 14:54:56",
        "deletedAt": null,
        "result": "pending"
      },
      {
        "id": 1040,
        "submissionId": 492,
        "pathogenId": 3,
        "createdAt": "2023-10-18 14:54:56",
        "updatedAt": "2023-10-18 14:54:56",
        "deletedAt": null,
        "result": "pending"
      },
      {
        "id": 1041,
        "submissionId": 492,
        "pathogenId": 4,
        "createdAt": "2023-10-18 14:54:56",
        "updatedAt": "2023-10-18 14:54:56",
        "deletedAt": null,
        "result": "pending"
      },
      {
        "id": 1042,
        "submissionId": 492,
        "pathogenId": 2,
        "createdAt": "2023-10-18 14:54:56",
        "updatedAt": "2023-10-23 15:57:53",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1043,
        "submissionId": 503,
        "pathogenId": 1,
        "createdAt": "2023-10-18 14:55:40",
        "updatedAt": "2023-10-18 14:55:40",
        "deletedAt": null,
        "result": "pending"
      },
      {
        "id": 1044,
        "submissionId": 503,
        "pathogenId": 3,
        "createdAt": "2023-10-18 14:55:40",
        "updatedAt": "2023-10-18 14:55:40",
        "deletedAt": null,
        "result": "pending"
      },
      {
        "id": 1045,
        "submissionId": 503,
        "pathogenId": 4,
        "createdAt": "2023-10-18 14:55:40",
        "updatedAt": "2023-10-18 14:55:40",
        "deletedAt": null,
        "result": "pending"
      },
      {
        "id": 1046,
        "submissionId": 503,
        "pathogenId": 2,
        "createdAt": "2023-10-18 14:55:40",
        "updatedAt": "2023-10-23 16:05:31",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1047,
        "submissionId": 738,
        "pathogenId": 1,
        "createdAt": "2023-10-18 14:56:18",
        "updatedAt": "2023-10-18 14:56:18",
        "deletedAt": null,
        "result": "pending"
      },
      {
        "id": 1048,
        "submissionId": 738,
        "pathogenId": 3,
        "createdAt": "2023-10-18 14:56:18",
        "updatedAt": "2023-10-18 14:56:18",
        "deletedAt": null,
        "result": "pending"
      },
      {
        "id": 1049,
        "submissionId": 738,
        "pathogenId": 4,
        "createdAt": "2023-10-18 14:56:18",
        "updatedAt": "2023-10-18 14:56:18",
        "deletedAt": null,
        "result": "pending"
      },
      {
        "id": 1050,
        "submissionId": 738,
        "pathogenId": 2,
        "createdAt": "2023-10-18 14:56:18",
        "updatedAt": "2023-10-23 16:12:35",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1051,
        "submissionId": 880,
        "pathogenId": 1,
        "createdAt": "2023-10-18 14:56:36",
        "updatedAt": "2023-10-18 14:56:36",
        "deletedAt": null,
        "result": "pending"
      },
      {
        "id": 1052,
        "submissionId": 880,
        "pathogenId": 3,
        "createdAt": "2023-10-18 14:56:36",
        "updatedAt": "2023-10-18 14:56:36",
        "deletedAt": null,
        "result": "pending"
      },
      {
        "id": 1053,
        "submissionId": 880,
        "pathogenId": 4,
        "createdAt": "2023-10-18 14:56:36",
        "updatedAt": "2023-10-18 14:56:36",
        "deletedAt": null,
        "result": "pending"
      },
      {
        "id": 1054,
        "submissionId": 880,
        "pathogenId": 2,
        "createdAt": "2023-10-18 14:56:36",
        "updatedAt": "2023-10-23 16:14:10",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1055,
        "submissionId": 994,
        "pathogenId": 1,
        "createdAt": "2023-10-18 15:00:31",
        "updatedAt": "2023-10-18 15:00:31",
        "deletedAt": null,
        "result": "pending"
      },
      {
        "id": 1056,
        "submissionId": 994,
        "pathogenId": 3,
        "createdAt": "2023-10-18 15:00:31",
        "updatedAt": "2023-10-18 15:00:31",
        "deletedAt": null,
        "result": "pending"
      },
      {
        "id": 1057,
        "submissionId": 994,
        "pathogenId": 4,
        "createdAt": "2023-10-18 15:00:31",
        "updatedAt": "2023-10-18 15:00:31",
        "deletedAt": null,
        "result": "pending"
      },
      {
        "id": 1058,
        "submissionId": 994,
        "pathogenId": 2,
        "createdAt": "2023-10-18 15:00:31",
        "updatedAt": "2023-10-23 16:21:30",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1059,
        "submissionId": 480,
        "pathogenId": 1,
        "createdAt": "2023-10-18 15:04:01",
        "updatedAt": "2023-10-18 15:04:01",
        "deletedAt": null,
        "result": "pending"
      },
      {
        "id": 1060,
        "submissionId": 480,
        "pathogenId": 3,
        "createdAt": "2023-10-18 15:04:01",
        "updatedAt": "2023-10-18 15:04:01",
        "deletedAt": null,
        "result": "pending"
      },
      {
        "id": 1061,
        "submissionId": 480,
        "pathogenId": 4,
        "createdAt": "2023-10-18 15:04:01",
        "updatedAt": "2023-10-23 15:41:15",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1062,
        "submissionId": 480,
        "pathogenId": 2,
        "createdAt": "2023-10-18 15:04:01",
        "updatedAt": "2023-10-23 15:40:45",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1063,
        "submissionId": 75,
        "pathogenId": 1,
        "createdAt": "2023-10-18 15:18:07",
        "updatedAt": "2023-10-18 15:18:07",
        "deletedAt": null,
        "result": "pending"
      },
      {
        "id": 1064,
        "submissionId": 75,
        "pathogenId": 3,
        "createdAt": "2023-10-18 15:18:07",
        "updatedAt": "2023-10-18 15:18:07",
        "deletedAt": null,
        "result": "pending"
      },
      {
        "id": 1065,
        "submissionId": 75,
        "pathogenId": 4,
        "createdAt": "2023-10-18 15:18:07",
        "updatedAt": "2023-10-18 15:18:07",
        "deletedAt": null,
        "result": "pending"
      },
      {
        "id": 1066,
        "submissionId": 75,
        "pathogenId": 2,
        "createdAt": "2023-10-18 15:18:07",
        "updatedAt": "2023-10-23 14:31:09",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1067,
        "submissionId": 309,
        "pathogenId": 1,
        "createdAt": "2023-10-18 15:18:52",
        "updatedAt": "2023-10-18 15:18:52",
        "deletedAt": null,
        "result": "pending"
      },
      {
        "id": 1068,
        "submissionId": 309,
        "pathogenId": 3,
        "createdAt": "2023-10-18 15:18:52",
        "updatedAt": "2023-10-18 15:18:52",
        "deletedAt": null,
        "result": "pending"
      },
      {
        "id": 1069,
        "submissionId": 309,
        "pathogenId": 4,
        "createdAt": "2023-10-18 15:18:52",
        "updatedAt": "2023-10-18 15:18:52",
        "deletedAt": null,
        "result": "pending"
      },
      {
        "id": 1070,
        "submissionId": 309,
        "pathogenId": 2,
        "createdAt": "2023-10-18 15:18:52",
        "updatedAt": "2023-10-23 14:32:32",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1071,
        "submissionId": 76,
        "pathogenId": 1,
        "createdAt": "2023-10-18 15:19:31",
        "updatedAt": "2023-10-18 15:19:31",
        "deletedAt": null,
        "result": "pending"
      },
      {
        "id": 1072,
        "submissionId": 76,
        "pathogenId": 3,
        "createdAt": "2023-10-18 15:19:31",
        "updatedAt": "2023-10-18 15:19:31",
        "deletedAt": null,
        "result": "pending"
      },
      {
        "id": 1073,
        "submissionId": 76,
        "pathogenId": 4,
        "createdAt": "2023-10-18 15:19:31",
        "updatedAt": "2023-10-18 15:19:31",
        "deletedAt": null,
        "result": "pending"
      },
      {
        "id": 1074,
        "submissionId": 76,
        "pathogenId": 2,
        "createdAt": "2023-10-18 15:19:31",
        "updatedAt": "2023-10-23 14:31:48",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1075,
        "submissionId": 477,
        "pathogenId": 1,
        "createdAt": "2023-10-18 15:21:44",
        "updatedAt": "2023-10-18 15:21:44",
        "deletedAt": null,
        "result": "pending"
      },
      {
        "id": 1076,
        "submissionId": 477,
        "pathogenId": 3,
        "createdAt": "2023-10-18 15:21:44",
        "updatedAt": "2023-10-18 15:21:44",
        "deletedAt": null,
        "result": "pending"
      },
      {
        "id": 1077,
        "submissionId": 477,
        "pathogenId": 4,
        "createdAt": "2023-10-18 15:21:44",
        "updatedAt": "2023-10-18 15:21:44",
        "deletedAt": null,
        "result": "pending"
      },
      {
        "id": 1078,
        "submissionId": 477,
        "pathogenId": 2,
        "createdAt": "2023-10-18 15:21:44",
        "updatedAt": "2023-10-23 15:29:10",
        "deletedAt": null,
        "result": "positive"
      },
      {
        "id": 1079,
        "submissionId": 472,
        "pathogenId": 1,
        "createdAt": "2023-10-18 16:15:40",
        "updatedAt": "2023-10-18 16:15:40",
        "deletedAt": null,
        "result": "pending"
      },
      {
        "id": 1080,
        "submissionId": 472,
        "pathogenId": 3,
        "createdAt": "2023-10-18 16:15:40",
        "updatedAt": "2023-10-18 16:15:40",
        "deletedAt": null,
        "result": "pending"
      },
      {
        "id": 1081,
        "submissionId": 472,
        "pathogenId": 4,
        "createdAt": "2023-10-18 16:15:40",
        "updatedAt": "2023-10-18 16:15:40",
        "deletedAt": null,
        "result": "pending"
      },
      {
        "id": 1082,
        "submissionId": 472,
        "pathogenId": 2,
        "createdAt": "2023-10-18 16:15:40",
        "updatedAt": "2023-10-23 15:25:28",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1083,
        "submissionId": 496,
        "pathogenId": 1,
        "createdAt": "2023-10-18 16:17:27",
        "updatedAt": "2023-10-18 16:17:27",
        "deletedAt": null,
        "result": "pending"
      },
      {
        "id": 1084,
        "submissionId": 496,
        "pathogenId": 3,
        "createdAt": "2023-10-18 16:17:27",
        "updatedAt": "2023-10-18 16:17:27",
        "deletedAt": null,
        "result": "pending"
      },
      {
        "id": 1085,
        "submissionId": 496,
        "pathogenId": 4,
        "createdAt": "2023-10-18 16:17:27",
        "updatedAt": "2023-10-18 16:17:27",
        "deletedAt": null,
        "result": "pending"
      },
      {
        "id": 1086,
        "submissionId": 496,
        "pathogenId": 2,
        "createdAt": "2023-10-18 16:17:27",
        "updatedAt": "2023-10-23 16:03:56",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1087,
        "submissionId": 1127,
        "pathogenId": 1,
        "createdAt": "2023-10-18 19:29:55",
        "updatedAt": "2023-11-23 00:18:17",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1088,
        "submissionId": 1127,
        "pathogenId": 3,
        "createdAt": "2023-10-18 19:29:55",
        "updatedAt": "2023-11-29 21:11:07",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1089,
        "submissionId": 1127,
        "pathogenId": 4,
        "createdAt": "2023-10-18 19:29:55",
        "updatedAt": "2023-11-29 21:12:07",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1090,
        "submissionId": 1127,
        "pathogenId": 2,
        "createdAt": "2023-10-18 19:29:55",
        "updatedAt": "2023-11-23 00:18:07",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1091,
        "submissionId": 1120,
        "pathogenId": 1,
        "createdAt": "2023-10-18 19:33:03",
        "updatedAt": "2023-11-23 03:32:55",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1092,
        "submissionId": 1120,
        "pathogenId": 3,
        "createdAt": "2023-10-18 19:33:03",
        "updatedAt": "2023-11-29 21:02:18",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1093,
        "submissionId": 1120,
        "pathogenId": 4,
        "createdAt": "2023-10-18 19:33:03",
        "updatedAt": "2023-11-29 21:02:21",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1094,
        "submissionId": 1120,
        "pathogenId": 2,
        "createdAt": "2023-10-18 19:33:03",
        "updatedAt": "2023-11-23 03:32:47",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1095,
        "submissionId": 1130,
        "pathogenId": 1,
        "createdAt": "2023-10-18 19:38:55",
        "updatedAt": "2023-11-23 00:20:17",
        "deletedAt": null,
        "result": "positive"
      },
      {
        "id": 1096,
        "submissionId": 1130,
        "pathogenId": 3,
        "createdAt": "2023-10-18 19:38:55",
        "updatedAt": "2023-11-29 21:13:43",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1097,
        "submissionId": 1130,
        "pathogenId": 4,
        "createdAt": "2023-10-18 19:38:55",
        "updatedAt": "2023-11-29 21:13:44",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1098,
        "submissionId": 1130,
        "pathogenId": 2,
        "createdAt": "2023-10-18 19:38:55",
        "updatedAt": "2023-11-23 00:19:36",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1099,
        "submissionId": 476,
        "pathogenId": 1,
        "createdAt": "2023-10-20 16:52:40",
        "updatedAt": "2023-10-20 16:52:40",
        "deletedAt": null,
        "result": "pending"
      },
      {
        "id": 1100,
        "submissionId": 476,
        "pathogenId": 3,
        "createdAt": "2023-10-20 16:52:40",
        "updatedAt": "2023-10-20 16:52:40",
        "deletedAt": null,
        "result": "pending"
      },
      {
        "id": 1101,
        "submissionId": 476,
        "pathogenId": 4,
        "createdAt": "2023-10-20 16:52:40",
        "updatedAt": "2023-10-20 16:52:40",
        "deletedAt": null,
        "result": "pending"
      },
      {
        "id": 1102,
        "submissionId": 476,
        "pathogenId": 2,
        "createdAt": "2023-10-20 16:52:40",
        "updatedAt": "2023-10-23 15:28:19",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1103,
        "submissionId": 1112,
        "pathogenId": 5,
        "createdAt": "2023-10-23 14:00:13",
        "updatedAt": "2023-10-23 14:25:08",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1104,
        "submissionId": 1112,
        "pathogenId": 6,
        "createdAt": "2023-10-23 14:00:13",
        "updatedAt": "2023-10-23 14:25:10",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1105,
        "submissionId": 988,
        "pathogenId": 1,
        "createdAt": "2023-10-23 14:31:52",
        "updatedAt": "2023-10-23 14:52:01",
        "deletedAt": null,
        "result": "positive"
      },
      {
        "id": 1106,
        "submissionId": 988,
        "pathogenId": 3,
        "createdAt": "2023-10-23 14:31:52",
        "updatedAt": "2023-10-23 14:52:03",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1107,
        "submissionId": 988,
        "pathogenId": 4,
        "createdAt": "2023-10-23 14:31:52",
        "updatedAt": "2023-10-23 14:52:05",
        "deletedAt": null,
        "result": "positive"
      },
      {
        "id": 1108,
        "submissionId": 988,
        "pathogenId": 2,
        "createdAt": "2023-10-23 14:31:52",
        "updatedAt": "2023-10-23 14:52:08",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1109,
        "submissionId": 458,
        "pathogenId": 1,
        "createdAt": "2023-10-23 14:36:27",
        "updatedAt": "2023-10-23 14:36:27",
        "deletedAt": null,
        "result": "pending"
      },
      {
        "id": 1110,
        "submissionId": 458,
        "pathogenId": 3,
        "createdAt": "2023-10-23 14:36:27",
        "updatedAt": "2023-10-23 14:36:27",
        "deletedAt": null,
        "result": "pending"
      },
      {
        "id": 1111,
        "submissionId": 458,
        "pathogenId": 4,
        "createdAt": "2023-10-23 14:36:27",
        "updatedAt": "2023-10-23 14:36:27",
        "deletedAt": null,
        "result": "pending"
      },
      {
        "id": 1112,
        "submissionId": 458,
        "pathogenId": 2,
        "createdAt": "2023-10-23 14:36:27",
        "updatedAt": "2023-10-23 14:36:32",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1113,
        "submissionId": 460,
        "pathogenId": 1,
        "createdAt": "2023-10-23 14:37:09",
        "updatedAt": "2023-10-23 14:40:25",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1114,
        "submissionId": 460,
        "pathogenId": 3,
        "createdAt": "2023-10-23 14:37:09",
        "updatedAt": "2023-10-23 14:40:30",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1115,
        "submissionId": 460,
        "pathogenId": 4,
        "createdAt": "2023-10-23 14:37:09",
        "updatedAt": "2023-10-23 14:40:44",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1116,
        "submissionId": 460,
        "pathogenId": 2,
        "createdAt": "2023-10-23 14:37:09",
        "updatedAt": "2023-10-23 14:40:46",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1117,
        "submissionId": 989,
        "pathogenId": 1,
        "createdAt": "2023-10-23 14:37:29",
        "updatedAt": "2023-10-23 14:52:32",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1118,
        "submissionId": 989,
        "pathogenId": 3,
        "createdAt": "2023-10-23 14:37:29",
        "updatedAt": "2023-10-23 14:52:34",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1119,
        "submissionId": 989,
        "pathogenId": 4,
        "createdAt": "2023-10-23 14:37:29",
        "updatedAt": "2023-10-23 14:52:36",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1120,
        "submissionId": 989,
        "pathogenId": 2,
        "createdAt": "2023-10-23 14:37:29",
        "updatedAt": "2023-10-23 14:52:37",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1121,
        "submissionId": 473,
        "pathogenId": 1,
        "createdAt": "2023-10-23 15:26:12",
        "updatedAt": "2023-10-23 15:26:12",
        "deletedAt": null,
        "result": "pending"
      },
      {
        "id": 1122,
        "submissionId": 473,
        "pathogenId": 3,
        "createdAt": "2023-10-23 15:26:12",
        "updatedAt": "2023-10-23 15:26:12",
        "deletedAt": null,
        "result": "pending"
      },
      {
        "id": 1123,
        "submissionId": 473,
        "pathogenId": 4,
        "createdAt": "2023-10-23 15:26:12",
        "updatedAt": "2023-10-23 15:26:12",
        "deletedAt": null,
        "result": "pending"
      },
      {
        "id": 1124,
        "submissionId": 473,
        "pathogenId": 2,
        "createdAt": "2023-10-23 15:26:12",
        "updatedAt": "2023-10-23 15:26:15",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1125,
        "submissionId": 475,
        "pathogenId": 1,
        "createdAt": "2023-10-23 15:27:09",
        "updatedAt": "2023-10-23 15:27:09",
        "deletedAt": null,
        "result": "pending"
      },
      {
        "id": 1126,
        "submissionId": 475,
        "pathogenId": 3,
        "createdAt": "2023-10-23 15:27:09",
        "updatedAt": "2023-10-23 15:27:09",
        "deletedAt": null,
        "result": "pending"
      },
      {
        "id": 1127,
        "submissionId": 475,
        "pathogenId": 4,
        "createdAt": "2023-10-23 15:27:09",
        "updatedAt": "2023-10-23 15:27:09",
        "deletedAt": null,
        "result": "pending"
      },
      {
        "id": 1128,
        "submissionId": 475,
        "pathogenId": 2,
        "createdAt": "2023-10-23 15:27:09",
        "updatedAt": "2023-10-23 15:27:28",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1129,
        "submissionId": 481,
        "pathogenId": 1,
        "createdAt": "2023-10-23 15:42:18",
        "updatedAt": "2023-10-23 15:42:18",
        "deletedAt": null,
        "result": "pending"
      },
      {
        "id": 1130,
        "submissionId": 481,
        "pathogenId": 3,
        "createdAt": "2023-10-23 15:42:18",
        "updatedAt": "2023-10-23 15:42:18",
        "deletedAt": null,
        "result": "pending"
      },
      {
        "id": 1131,
        "submissionId": 481,
        "pathogenId": 4,
        "createdAt": "2023-10-23 15:42:18",
        "updatedAt": "2023-10-23 15:42:18",
        "deletedAt": null,
        "result": "pending"
      },
      {
        "id": 1132,
        "submissionId": 481,
        "pathogenId": 2,
        "createdAt": "2023-10-23 15:42:18",
        "updatedAt": "2023-10-23 15:42:37",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1133,
        "submissionId": 482,
        "pathogenId": 1,
        "createdAt": "2023-10-23 15:43:30",
        "updatedAt": "2023-10-23 15:43:30",
        "deletedAt": null,
        "result": "pending"
      },
      {
        "id": 1134,
        "submissionId": 482,
        "pathogenId": 3,
        "createdAt": "2023-10-23 15:43:30",
        "updatedAt": "2023-10-23 15:43:30",
        "deletedAt": null,
        "result": "pending"
      },
      {
        "id": 1135,
        "submissionId": 482,
        "pathogenId": 4,
        "createdAt": "2023-10-23 15:43:30",
        "updatedAt": "2023-10-23 15:43:30",
        "deletedAt": null,
        "result": "pending"
      },
      {
        "id": 1136,
        "submissionId": 482,
        "pathogenId": 2,
        "createdAt": "2023-10-23 15:43:30",
        "updatedAt": "2023-10-23 15:44:05",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1137,
        "submissionId": 490,
        "pathogenId": 1,
        "createdAt": "2023-10-23 15:51:27",
        "updatedAt": "2023-10-23 15:51:27",
        "deletedAt": null,
        "result": "pending"
      },
      {
        "id": 1138,
        "submissionId": 490,
        "pathogenId": 3,
        "createdAt": "2023-10-23 15:51:27",
        "updatedAt": "2023-10-23 15:51:27",
        "deletedAt": null,
        "result": "pending"
      },
      {
        "id": 1139,
        "submissionId": 490,
        "pathogenId": 4,
        "createdAt": "2023-10-23 15:51:27",
        "updatedAt": "2023-10-23 15:56:26",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1140,
        "submissionId": 490,
        "pathogenId": 2,
        "createdAt": "2023-10-23 15:51:27",
        "updatedAt": "2023-10-23 15:55:58",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1141,
        "submissionId": 493,
        "pathogenId": 1,
        "createdAt": "2023-10-23 15:58:22",
        "updatedAt": "2023-10-23 15:58:37",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1142,
        "submissionId": 493,
        "pathogenId": 3,
        "createdAt": "2023-10-23 15:58:22",
        "updatedAt": "2023-10-23 15:59:49",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1143,
        "submissionId": 493,
        "pathogenId": 4,
        "createdAt": "2023-10-23 15:58:22",
        "updatedAt": "2023-10-23 15:59:47",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1144,
        "submissionId": 493,
        "pathogenId": 2,
        "createdAt": "2023-10-23 15:58:22",
        "updatedAt": "2023-10-23 15:59:11",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1145,
        "submissionId": 495,
        "pathogenId": 1,
        "createdAt": "2023-10-23 16:03:04",
        "updatedAt": "2023-10-23 16:03:04",
        "deletedAt": null,
        "result": "pending"
      },
      {
        "id": 1146,
        "submissionId": 495,
        "pathogenId": 3,
        "createdAt": "2023-10-23 16:03:04",
        "updatedAt": "2023-10-23 16:03:04",
        "deletedAt": null,
        "result": "pending"
      },
      {
        "id": 1147,
        "submissionId": 495,
        "pathogenId": 4,
        "createdAt": "2023-10-23 16:03:04",
        "updatedAt": "2023-10-23 16:03:04",
        "deletedAt": null,
        "result": "pending"
      },
      {
        "id": 1148,
        "submissionId": 495,
        "pathogenId": 2,
        "createdAt": "2023-10-23 16:03:04",
        "updatedAt": "2023-10-23 16:03:08",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1149,
        "submissionId": 497,
        "pathogenId": 1,
        "createdAt": "2023-10-23 16:04:39",
        "updatedAt": "2023-10-23 16:04:39",
        "deletedAt": null,
        "result": "pending"
      },
      {
        "id": 1150,
        "submissionId": 497,
        "pathogenId": 3,
        "createdAt": "2023-10-23 16:04:39",
        "updatedAt": "2023-10-23 16:04:39",
        "deletedAt": null,
        "result": "pending"
      },
      {
        "id": 1151,
        "submissionId": 497,
        "pathogenId": 4,
        "createdAt": "2023-10-23 16:04:39",
        "updatedAt": "2023-10-23 16:04:39",
        "deletedAt": null,
        "result": "pending"
      },
      {
        "id": 1152,
        "submissionId": 497,
        "pathogenId": 2,
        "createdAt": "2023-10-23 16:04:39",
        "updatedAt": "2023-10-23 16:04:44",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1153,
        "submissionId": 610,
        "pathogenId": 1,
        "createdAt": "2023-10-23 16:06:04",
        "updatedAt": "2023-10-23 16:06:10",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1154,
        "submissionId": 610,
        "pathogenId": 3,
        "createdAt": "2023-10-23 16:06:04",
        "updatedAt": "2023-10-23 16:09:35",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1155,
        "submissionId": 610,
        "pathogenId": 4,
        "createdAt": "2023-10-23 16:06:04",
        "updatedAt": "2023-10-23 16:09:33",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1156,
        "submissionId": 610,
        "pathogenId": 2,
        "createdAt": "2023-10-23 16:06:04",
        "updatedAt": "2023-10-23 16:06:54",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1157,
        "submissionId": 632,
        "pathogenId": 1,
        "createdAt": "2023-10-23 16:10:19",
        "updatedAt": "2023-10-23 16:10:19",
        "deletedAt": null,
        "result": "pending"
      },
      {
        "id": 1158,
        "submissionId": 632,
        "pathogenId": 3,
        "createdAt": "2023-10-23 16:10:19",
        "updatedAt": "2023-10-23 16:10:19",
        "deletedAt": null,
        "result": "pending"
      },
      {
        "id": 1159,
        "submissionId": 632,
        "pathogenId": 4,
        "createdAt": "2023-10-23 16:10:19",
        "updatedAt": "2023-10-23 16:10:19",
        "deletedAt": null,
        "result": "pending"
      },
      {
        "id": 1160,
        "submissionId": 632,
        "pathogenId": 2,
        "createdAt": "2023-10-23 16:10:19",
        "updatedAt": "2023-10-23 16:10:22",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1161,
        "submissionId": 667,
        "pathogenId": 1,
        "createdAt": "2023-10-23 16:11:04",
        "updatedAt": "2023-10-23 16:11:04",
        "deletedAt": null,
        "result": "pending"
      },
      {
        "id": 1162,
        "submissionId": 667,
        "pathogenId": 3,
        "createdAt": "2023-10-23 16:11:04",
        "updatedAt": "2023-10-23 16:11:04",
        "deletedAt": null,
        "result": "pending"
      },
      {
        "id": 1163,
        "submissionId": 667,
        "pathogenId": 4,
        "createdAt": "2023-10-23 16:11:04",
        "updatedAt": "2023-10-23 16:11:04",
        "deletedAt": null,
        "result": "pending"
      },
      {
        "id": 1164,
        "submissionId": 667,
        "pathogenId": 2,
        "createdAt": "2023-10-23 16:11:04",
        "updatedAt": "2023-10-23 16:11:42",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1165,
        "submissionId": 837,
        "pathogenId": 1,
        "createdAt": "2023-10-23 16:13:03",
        "updatedAt": "2023-10-23 16:13:03",
        "deletedAt": null,
        "result": "pending"
      },
      {
        "id": 1166,
        "submissionId": 837,
        "pathogenId": 3,
        "createdAt": "2023-10-23 16:13:03",
        "updatedAt": "2023-10-23 16:13:03",
        "deletedAt": null,
        "result": "pending"
      },
      {
        "id": 1167,
        "submissionId": 837,
        "pathogenId": 4,
        "createdAt": "2023-10-23 16:13:03",
        "updatedAt": "2023-10-23 16:13:03",
        "deletedAt": null,
        "result": "pending"
      },
      {
        "id": 1168,
        "submissionId": 837,
        "pathogenId": 2,
        "createdAt": "2023-10-23 16:13:03",
        "updatedAt": "2023-10-23 16:13:17",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1169,
        "submissionId": 969,
        "pathogenId": 1,
        "createdAt": "2023-10-23 16:14:48",
        "updatedAt": "2023-10-23 16:15:02",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1170,
        "submissionId": 969,
        "pathogenId": 3,
        "createdAt": "2023-10-23 16:14:48",
        "updatedAt": "2023-10-23 16:15:21",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1171,
        "submissionId": 969,
        "pathogenId": 4,
        "createdAt": "2023-10-23 16:14:48",
        "updatedAt": "2023-10-23 16:15:36",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1172,
        "submissionId": 969,
        "pathogenId": 2,
        "createdAt": "2023-10-23 16:14:48",
        "updatedAt": "2023-10-23 16:15:51",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1173,
        "submissionId": 986,
        "pathogenId": 1,
        "createdAt": "2023-10-23 16:18:24",
        "updatedAt": "2023-10-23 16:18:24",
        "deletedAt": null,
        "result": "pending"
      },
      {
        "id": 1174,
        "submissionId": 986,
        "pathogenId": 3,
        "createdAt": "2023-10-23 16:18:24",
        "updatedAt": "2023-10-23 16:18:24",
        "deletedAt": null,
        "result": "pending"
      },
      {
        "id": 1175,
        "submissionId": 986,
        "pathogenId": 4,
        "createdAt": "2023-10-23 16:18:24",
        "updatedAt": "2023-10-23 16:18:24",
        "deletedAt": null,
        "result": "pending"
      },
      {
        "id": 1176,
        "submissionId": 986,
        "pathogenId": 2,
        "createdAt": "2023-10-23 16:18:24",
        "updatedAt": "2023-10-23 16:18:38",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1177,
        "submissionId": 1036,
        "pathogenId": 1,
        "createdAt": "2023-10-23 16:21:53",
        "updatedAt": "2023-10-23 16:22:03",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1178,
        "submissionId": 1036,
        "pathogenId": 3,
        "createdAt": "2023-10-23 16:21:53",
        "updatedAt": "2023-10-23 16:22:05",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1179,
        "submissionId": 1036,
        "pathogenId": 4,
        "createdAt": "2023-10-23 16:21:53",
        "updatedAt": "2023-10-23 16:22:07",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1180,
        "submissionId": 1036,
        "pathogenId": 2,
        "createdAt": "2023-10-23 16:21:53",
        "updatedAt": "2023-10-23 16:22:09",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1181,
        "submissionId": 1046,
        "pathogenId": 1,
        "createdAt": "2023-10-23 16:23:25",
        "updatedAt": "2023-10-23 16:24:11",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1182,
        "submissionId": 1046,
        "pathogenId": 3,
        "createdAt": "2023-10-23 16:23:25",
        "updatedAt": "2023-10-23 16:24:13",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1183,
        "submissionId": 1046,
        "pathogenId": 4,
        "createdAt": "2023-10-23 16:23:25",
        "updatedAt": "2023-10-23 16:24:15",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1184,
        "submissionId": 1046,
        "pathogenId": 2,
        "createdAt": "2023-10-23 16:23:25",
        "updatedAt": "2023-10-23 16:24:16",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1185,
        "submissionId": 43,
        "pathogenId": 5,
        "createdAt": "2023-10-23 17:03:43",
        "updatedAt": "2023-10-23 17:03:48",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1186,
        "submissionId": 43,
        "pathogenId": 6,
        "createdAt": "2023-10-23 17:03:43",
        "updatedAt": "2023-10-23 17:03:49",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1187,
        "submissionId": 52,
        "pathogenId": 5,
        "createdAt": "2023-10-23 17:04:48",
        "updatedAt": "2023-10-23 17:04:52",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1188,
        "submissionId": 52,
        "pathogenId": 6,
        "createdAt": "2023-10-23 17:04:48",
        "updatedAt": "2023-10-23 17:04:53",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1189,
        "submissionId": 74,
        "pathogenId": 5,
        "createdAt": "2023-10-23 17:06:16",
        "updatedAt": "2023-10-23 17:06:24",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1190,
        "submissionId": 74,
        "pathogenId": 6,
        "createdAt": "2023-10-23 17:06:16",
        "updatedAt": "2023-10-23 17:06:25",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1191,
        "submissionId": 98,
        "pathogenId": 5,
        "createdAt": "2023-10-23 17:07:03",
        "updatedAt": "2023-10-23 17:07:06",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1192,
        "submissionId": 98,
        "pathogenId": 6,
        "createdAt": "2023-10-23 17:07:03",
        "updatedAt": "2023-10-23 17:07:07",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1193,
        "submissionId": 121,
        "pathogenId": 5,
        "createdAt": "2023-10-23 17:07:22",
        "updatedAt": "2023-10-23 17:07:38",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1194,
        "submissionId": 121,
        "pathogenId": 6,
        "createdAt": "2023-10-23 17:07:22",
        "updatedAt": "2023-10-23 17:07:40",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1195,
        "submissionId": 132,
        "pathogenId": 5,
        "createdAt": "2023-10-23 17:07:51",
        "updatedAt": "2023-10-23 17:23:47",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1196,
        "submissionId": 132,
        "pathogenId": 6,
        "createdAt": "2023-10-23 17:07:51",
        "updatedAt": "2023-10-23 17:23:48",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1197,
        "submissionId": 186,
        "pathogenId": 5,
        "createdAt": "2023-10-23 17:24:21",
        "updatedAt": "2023-10-23 17:24:54",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1198,
        "submissionId": 186,
        "pathogenId": 6,
        "createdAt": "2023-10-23 17:24:21",
        "updatedAt": "2023-10-23 17:24:55",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1199,
        "submissionId": 351,
        "pathogenId": 5,
        "createdAt": "2023-10-23 17:25:38",
        "updatedAt": "2023-10-23 17:25:42",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1200,
        "submissionId": 351,
        "pathogenId": 6,
        "createdAt": "2023-10-23 17:25:38",
        "updatedAt": "2023-10-23 17:25:43",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1201,
        "submissionId": 448,
        "pathogenId": 5,
        "createdAt": "2023-10-23 17:27:22",
        "updatedAt": "2023-10-23 17:27:35",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1202,
        "submissionId": 448,
        "pathogenId": 6,
        "createdAt": "2023-10-23 17:27:22",
        "updatedAt": "2023-10-23 17:27:37",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1203,
        "submissionId": 751,
        "pathogenId": 5,
        "createdAt": "2023-10-23 17:28:25",
        "updatedAt": "2023-10-23 17:28:29",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1204,
        "submissionId": 751,
        "pathogenId": 6,
        "createdAt": "2023-10-23 17:28:25",
        "updatedAt": "2023-10-23 17:28:30",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1205,
        "submissionId": 770,
        "pathogenId": 5,
        "createdAt": "2023-10-23 17:29:03",
        "updatedAt": "2023-10-23 17:29:10",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1206,
        "submissionId": 770,
        "pathogenId": 6,
        "createdAt": "2023-10-23 17:29:03",
        "updatedAt": "2023-10-23 17:29:12",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1207,
        "submissionId": 799,
        "pathogenId": 5,
        "createdAt": "2023-10-23 17:32:04",
        "updatedAt": "2023-10-23 17:32:12",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1208,
        "submissionId": 799,
        "pathogenId": 6,
        "createdAt": "2023-10-23 17:32:04",
        "updatedAt": "2023-10-23 17:32:14",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1209,
        "submissionId": 883,
        "pathogenId": 5,
        "createdAt": "2023-10-23 17:32:40",
        "updatedAt": "2023-10-23 17:33:04",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1210,
        "submissionId": 883,
        "pathogenId": 6,
        "createdAt": "2023-10-23 17:32:40",
        "updatedAt": "2023-10-23 17:33:05",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1211,
        "submissionId": 1102,
        "pathogenId": 5,
        "createdAt": "2023-10-23 17:33:29",
        "updatedAt": "2023-10-23 17:34:01",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1212,
        "submissionId": 1102,
        "pathogenId": 6,
        "createdAt": "2023-10-23 17:33:29",
        "updatedAt": "2023-10-23 17:34:02",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1213,
        "submissionId": 930,
        "pathogenId": 5,
        "createdAt": "2023-10-23 17:34:41",
        "updatedAt": "2023-10-23 17:34:53",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1214,
        "submissionId": 930,
        "pathogenId": 6,
        "createdAt": "2023-10-23 17:34:41",
        "updatedAt": "2023-10-23 17:34:55",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1215,
        "submissionId": 1010,
        "pathogenId": 5,
        "createdAt": "2023-10-23 17:35:34",
        "updatedAt": "2023-10-23 17:35:44",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1216,
        "submissionId": 1010,
        "pathogenId": 6,
        "createdAt": "2023-10-23 17:35:34",
        "updatedAt": "2023-10-23 17:35:45",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1217,
        "submissionId": 1032,
        "pathogenId": 5,
        "createdAt": "2023-10-23 17:36:11",
        "updatedAt": "2023-10-23 17:36:14",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1218,
        "submissionId": 1032,
        "pathogenId": 6,
        "createdAt": "2023-10-23 17:36:11",
        "updatedAt": "2023-10-23 17:36:16",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1219,
        "submissionId": 1047,
        "pathogenId": 5,
        "createdAt": "2023-10-23 17:36:50",
        "updatedAt": "2023-10-23 17:37:10",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1220,
        "submissionId": 1047,
        "pathogenId": 6,
        "createdAt": "2023-10-23 17:36:50",
        "updatedAt": "2023-10-23 17:37:11",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1221,
        "submissionId": 1074,
        "pathogenId": 5,
        "createdAt": "2023-10-23 17:37:41",
        "updatedAt": "2023-10-23 17:37:58",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1222,
        "submissionId": 1074,
        "pathogenId": 6,
        "createdAt": "2023-10-23 17:37:41",
        "updatedAt": "2023-10-23 17:38:00",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1223,
        "submissionId": 1082,
        "pathogenId": 5,
        "createdAt": "2023-10-23 17:39:04",
        "updatedAt": "2023-10-23 17:39:07",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1224,
        "submissionId": 1082,
        "pathogenId": 6,
        "createdAt": "2023-10-23 17:39:04",
        "updatedAt": "2023-10-23 17:39:09",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1225,
        "submissionId": 1088,
        "pathogenId": 5,
        "createdAt": "2023-10-23 17:39:31",
        "updatedAt": "2023-10-23 17:39:35",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1226,
        "submissionId": 1088,
        "pathogenId": 6,
        "createdAt": "2023-10-23 17:39:31",
        "updatedAt": "2023-10-23 17:39:37",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1227,
        "submissionId": 1096,
        "pathogenId": 5,
        "createdAt": "2023-10-23 17:40:15",
        "updatedAt": "2023-10-23 17:40:48",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1228,
        "submissionId": 1096,
        "pathogenId": 6,
        "createdAt": "2023-10-23 17:40:15",
        "updatedAt": "2023-10-23 17:40:50",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1229,
        "submissionId": 1089,
        "pathogenId": 5,
        "createdAt": "2023-10-23 17:41:40",
        "updatedAt": "2023-10-23 17:41:44",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1230,
        "submissionId": 1089,
        "pathogenId": 6,
        "createdAt": "2023-10-23 17:41:40",
        "updatedAt": "2023-10-23 17:41:45",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1231,
        "submissionId": 1097,
        "pathogenId": 5,
        "createdAt": "2023-10-23 17:42:37",
        "updatedAt": "2023-10-23 17:43:19",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1232,
        "submissionId": 1097,
        "pathogenId": 6,
        "createdAt": "2023-10-23 17:42:37",
        "updatedAt": "2023-10-23 17:43:20",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1233,
        "submissionId": 1099,
        "pathogenId": 5,
        "createdAt": "2023-10-23 17:43:44",
        "updatedAt": "2023-10-23 17:43:49",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1234,
        "submissionId": 1099,
        "pathogenId": 6,
        "createdAt": "2023-10-23 17:43:44",
        "updatedAt": "2023-10-23 17:43:50",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1235,
        "submissionId": 1100,
        "pathogenId": 5,
        "createdAt": "2023-10-23 17:44:22",
        "updatedAt": "2023-10-23 17:44:25",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1236,
        "submissionId": 1100,
        "pathogenId": 6,
        "createdAt": "2023-10-23 17:44:22",
        "updatedAt": "2023-10-23 17:44:26",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1237,
        "submissionId": 1109,
        "pathogenId": 5,
        "createdAt": "2023-10-23 17:44:56",
        "updatedAt": "2023-10-23 17:45:04",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1238,
        "submissionId": 1109,
        "pathogenId": 6,
        "createdAt": "2023-10-23 17:44:56",
        "updatedAt": "2023-10-23 17:45:05",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1239,
        "submissionId": 1110,
        "pathogenId": 5,
        "createdAt": "2023-10-23 17:45:17",
        "updatedAt": "2023-10-23 17:45:31",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1240,
        "submissionId": 1110,
        "pathogenId": 6,
        "createdAt": "2023-10-23 17:45:17",
        "updatedAt": "2023-10-23 17:45:33",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1241,
        "submissionId": 842,
        "pathogenId": 5,
        "createdAt": "2023-10-23 17:49:54",
        "updatedAt": "2023-10-23 17:50:04",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1242,
        "submissionId": 842,
        "pathogenId": 6,
        "createdAt": "2023-10-23 17:49:54",
        "updatedAt": "2023-10-23 17:50:05",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1243,
        "submissionId": 992,
        "pathogenId": 5,
        "createdAt": "2023-10-23 17:50:42",
        "updatedAt": "2023-10-23 17:50:46",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1244,
        "submissionId": 992,
        "pathogenId": 6,
        "createdAt": "2023-10-23 17:50:42",
        "updatedAt": "2023-10-23 17:50:47",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1245,
        "submissionId": 993,
        "pathogenId": 5,
        "createdAt": "2023-10-23 17:51:22",
        "updatedAt": "2023-10-23 17:51:29",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1246,
        "submissionId": 993,
        "pathogenId": 6,
        "createdAt": "2023-10-23 17:51:22",
        "updatedAt": "2023-10-23 17:51:30",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1247,
        "submissionId": 995,
        "pathogenId": 5,
        "createdAt": "2023-10-23 17:51:41",
        "updatedAt": "2023-10-23 17:51:53",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1248,
        "submissionId": 995,
        "pathogenId": 6,
        "createdAt": "2023-10-23 17:51:41",
        "updatedAt": "2023-10-23 17:51:55",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1249,
        "submissionId": 999,
        "pathogenId": 5,
        "createdAt": "2023-10-23 17:52:25",
        "updatedAt": "2023-10-23 17:52:37",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1250,
        "submissionId": 999,
        "pathogenId": 6,
        "createdAt": "2023-10-23 17:52:25",
        "updatedAt": "2023-10-23 17:52:38",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1251,
        "submissionId": 1003,
        "pathogenId": 5,
        "createdAt": "2023-10-23 17:53:01",
        "updatedAt": "2023-10-23 17:53:05",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1252,
        "submissionId": 1003,
        "pathogenId": 6,
        "createdAt": "2023-10-23 17:53:01",
        "updatedAt": "2023-10-23 17:53:07",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1253,
        "submissionId": 1016,
        "pathogenId": 5,
        "createdAt": "2023-10-23 17:53:17",
        "updatedAt": "2023-10-23 17:53:51",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1254,
        "submissionId": 1016,
        "pathogenId": 6,
        "createdAt": "2023-10-23 17:53:17",
        "updatedAt": "2023-10-23 17:53:52",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1255,
        "submissionId": 1018,
        "pathogenId": 5,
        "createdAt": "2023-10-23 17:54:42",
        "updatedAt": "2023-10-23 17:54:49",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1256,
        "submissionId": 1018,
        "pathogenId": 6,
        "createdAt": "2023-10-23 17:54:42",
        "updatedAt": "2023-10-23 17:54:50",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1257,
        "submissionId": 1022,
        "pathogenId": 5,
        "createdAt": "2023-10-23 17:55:14",
        "updatedAt": "2023-10-23 17:55:19",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1258,
        "submissionId": 1022,
        "pathogenId": 6,
        "createdAt": "2023-10-23 17:55:14",
        "updatedAt": "2023-10-23 17:55:21",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1259,
        "submissionId": 1028,
        "pathogenId": 5,
        "createdAt": "2023-10-23 17:55:45",
        "updatedAt": "2023-10-23 17:56:11",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1260,
        "submissionId": 1028,
        "pathogenId": 6,
        "createdAt": "2023-10-23 17:55:45",
        "updatedAt": "2023-10-23 17:56:13",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1261,
        "submissionId": 1030,
        "pathogenId": 5,
        "createdAt": "2023-10-23 17:56:48",
        "updatedAt": "2023-10-23 17:56:53",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1262,
        "submissionId": 1030,
        "pathogenId": 6,
        "createdAt": "2023-10-23 17:56:48",
        "updatedAt": "2023-10-23 17:56:55",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1263,
        "submissionId": 1042,
        "pathogenId": 5,
        "createdAt": "2023-10-23 17:57:28",
        "updatedAt": "2023-10-23 17:57:40",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1264,
        "submissionId": 1042,
        "pathogenId": 6,
        "createdAt": "2023-10-23 17:57:28",
        "updatedAt": "2023-10-23 17:57:41",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1265,
        "submissionId": 1051,
        "pathogenId": 5,
        "createdAt": "2023-10-23 17:58:05",
        "updatedAt": "2023-10-23 17:58:12",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1266,
        "submissionId": 1051,
        "pathogenId": 6,
        "createdAt": "2023-10-23 17:58:05",
        "updatedAt": "2023-10-23 17:58:13",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1267,
        "submissionId": 1057,
        "pathogenId": 5,
        "createdAt": "2023-10-23 17:59:22",
        "updatedAt": "2023-10-23 17:59:34",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1268,
        "submissionId": 1057,
        "pathogenId": 6,
        "createdAt": "2023-10-23 17:59:22",
        "updatedAt": "2023-10-23 17:59:35",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1269,
        "submissionId": 1066,
        "pathogenId": 5,
        "createdAt": "2023-10-23 17:59:50",
        "updatedAt": "2023-10-23 18:00:13",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1270,
        "submissionId": 1066,
        "pathogenId": 6,
        "createdAt": "2023-10-23 17:59:50",
        "updatedAt": "2023-10-23 18:00:14",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1271,
        "submissionId": 1068,
        "pathogenId": 5,
        "createdAt": "2023-10-23 18:00:25",
        "updatedAt": "2023-10-23 18:00:53",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1272,
        "submissionId": 1068,
        "pathogenId": 6,
        "createdAt": "2023-10-23 18:00:25",
        "updatedAt": "2023-10-23 18:00:54",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1273,
        "submissionId": 1069,
        "pathogenId": 5,
        "createdAt": "2023-10-23 18:01:05",
        "updatedAt": "2023-10-23 18:01:27",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1274,
        "submissionId": 1069,
        "pathogenId": 6,
        "createdAt": "2023-10-23 18:01:05",
        "updatedAt": "2023-10-23 18:01:28",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1275,
        "submissionId": 1070,
        "pathogenId": 5,
        "createdAt": "2023-10-23 18:01:50",
        "updatedAt": "2023-10-23 18:01:52",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1276,
        "submissionId": 1070,
        "pathogenId": 6,
        "createdAt": "2023-10-23 18:01:50",
        "updatedAt": "2023-10-23 18:01:53",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1277,
        "submissionId": 1071,
        "pathogenId": 5,
        "createdAt": "2023-10-23 18:02:17",
        "updatedAt": "2023-10-23 18:02:20",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1278,
        "submissionId": 1071,
        "pathogenId": 6,
        "createdAt": "2023-10-23 18:02:17",
        "updatedAt": "2023-10-23 18:02:21",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1279,
        "submissionId": 1081,
        "pathogenId": 5,
        "createdAt": "2023-10-23 18:03:45",
        "updatedAt": "2023-10-23 18:03:48",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1280,
        "submissionId": 1081,
        "pathogenId": 6,
        "createdAt": "2023-10-23 18:03:45",
        "updatedAt": "2023-10-23 18:03:49",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1281,
        "submissionId": 1131,
        "pathogenId": 1,
        "createdAt": "2023-10-23 20:30:11",
        "updatedAt": "2023-11-23 00:21:59",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1282,
        "submissionId": 1131,
        "pathogenId": 3,
        "createdAt": "2023-10-23 20:30:11",
        "updatedAt": "2023-11-29 21:15:21",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1283,
        "submissionId": 1131,
        "pathogenId": 4,
        "createdAt": "2023-10-23 20:30:11",
        "updatedAt": "2023-11-29 21:15:23",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1284,
        "submissionId": 1131,
        "pathogenId": 2,
        "createdAt": "2023-10-23 20:30:11",
        "updatedAt": "2023-11-23 00:21:38",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1285,
        "submissionId": 1136,
        "pathogenId": 1,
        "createdAt": "2023-10-23 20:35:43",
        "updatedAt": "2023-11-23 00:28:53",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1286,
        "submissionId": 1136,
        "pathogenId": 3,
        "createdAt": "2023-10-23 20:35:43",
        "updatedAt": "2023-11-29 21:29:05",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1287,
        "submissionId": 1136,
        "pathogenId": 4,
        "createdAt": "2023-10-23 20:35:43",
        "updatedAt": "2023-11-29 21:29:07",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1288,
        "submissionId": 1136,
        "pathogenId": 2,
        "createdAt": "2023-10-23 20:35:43",
        "updatedAt": "2023-11-23 00:28:37",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1289,
        "submissionId": 1135,
        "pathogenId": 1,
        "createdAt": "2023-10-23 20:40:12",
        "updatedAt": "2023-11-23 00:27:01",
        "deletedAt": null,
        "result": "positive"
      },
      {
        "id": 1290,
        "submissionId": 1135,
        "pathogenId": 3,
        "createdAt": "2023-10-23 20:40:12",
        "updatedAt": "2023-11-29 21:26:57",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1291,
        "submissionId": 1135,
        "pathogenId": 4,
        "createdAt": "2023-10-23 20:40:12",
        "updatedAt": "2023-11-29 21:26:59",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1292,
        "submissionId": 1135,
        "pathogenId": 2,
        "createdAt": "2023-10-23 20:40:12",
        "updatedAt": "2023-11-23 00:26:48",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1293,
        "submissionId": 1134,
        "pathogenId": 1,
        "createdAt": "2023-10-23 20:47:48",
        "updatedAt": "2023-11-23 00:25:13",
        "deletedAt": null,
        "result": "positive"
      },
      {
        "id": 1294,
        "submissionId": 1134,
        "pathogenId": 3,
        "createdAt": "2023-10-23 20:47:48",
        "updatedAt": "2023-11-29 21:21:36",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1295,
        "submissionId": 1134,
        "pathogenId": 4,
        "createdAt": "2023-10-23 20:47:48",
        "updatedAt": "2023-11-29 21:21:37",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1296,
        "submissionId": 1134,
        "pathogenId": 2,
        "createdAt": "2023-10-23 20:47:48",
        "updatedAt": "2023-11-23 00:24:46",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1297,
        "submissionId": 1132,
        "pathogenId": 1,
        "createdAt": "2023-10-24 20:36:42",
        "updatedAt": "2023-11-23 00:23:11",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1298,
        "submissionId": 1132,
        "pathogenId": 3,
        "createdAt": "2023-10-24 20:36:42",
        "updatedAt": "2023-11-29 21:17:43",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1299,
        "submissionId": 1132,
        "pathogenId": 4,
        "createdAt": "2023-10-24 20:36:42",
        "updatedAt": "2023-11-29 21:17:44",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1300,
        "submissionId": 1132,
        "pathogenId": 2,
        "createdAt": "2023-10-24 20:36:42",
        "updatedAt": "2023-11-23 00:23:00",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1301,
        "submissionId": 1144,
        "pathogenId": 1,
        "createdAt": "2023-10-26 19:02:58",
        "updatedAt": "2023-11-23 02:17:31",
        "deletedAt": null,
        "result": "positive"
      },
      {
        "id": 1302,
        "submissionId": 1144,
        "pathogenId": 3,
        "createdAt": "2023-10-26 19:02:58",
        "updatedAt": "2023-11-29 21:46:57",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1303,
        "submissionId": 1144,
        "pathogenId": 4,
        "createdAt": "2023-10-26 19:02:58",
        "updatedAt": "2023-11-29 21:46:58",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1304,
        "submissionId": 1144,
        "pathogenId": 2,
        "createdAt": "2023-10-26 19:02:58",
        "updatedAt": "2023-11-23 02:17:19",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1305,
        "submissionId": 1126,
        "pathogenId": 1,
        "createdAt": "2023-10-26 19:06:00",
        "updatedAt": "2023-11-23 00:17:10",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1306,
        "submissionId": 1126,
        "pathogenId": 3,
        "createdAt": "2023-10-26 19:06:00",
        "updatedAt": "2023-11-29 21:08:38",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1307,
        "submissionId": 1126,
        "pathogenId": 4,
        "createdAt": "2023-10-26 19:06:00",
        "updatedAt": "2023-11-29 21:08:39",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1308,
        "submissionId": 1126,
        "pathogenId": 2,
        "createdAt": "2023-10-26 19:06:00",
        "updatedAt": "2023-11-23 00:17:12",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1309,
        "submissionId": 1137,
        "pathogenId": 1,
        "createdAt": "2023-10-26 19:11:40",
        "updatedAt": "2023-11-23 00:30:28",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1310,
        "submissionId": 1137,
        "pathogenId": 3,
        "createdAt": "2023-10-26 19:11:40",
        "updatedAt": "2023-11-29 21:32:06",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1311,
        "submissionId": 1137,
        "pathogenId": 4,
        "createdAt": "2023-10-26 19:11:40",
        "updatedAt": "2023-11-29 21:32:01",
        "deletedAt": null,
        "result": "positive"
      },
      {
        "id": 1312,
        "submissionId": 1137,
        "pathogenId": 2,
        "createdAt": "2023-10-26 19:11:40",
        "updatedAt": "2023-11-23 00:30:11",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1313,
        "submissionId": 1138,
        "pathogenId": 1,
        "createdAt": "2023-10-26 19:20:21",
        "updatedAt": "2023-11-23 00:32:45",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1314,
        "submissionId": 1138,
        "pathogenId": 3,
        "createdAt": "2023-10-26 19:20:21",
        "updatedAt": "2023-11-29 21:34:47",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1315,
        "submissionId": 1138,
        "pathogenId": 4,
        "createdAt": "2023-10-26 19:20:21",
        "updatedAt": "2023-11-29 21:34:49",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1316,
        "submissionId": 1138,
        "pathogenId": 2,
        "createdAt": "2023-10-26 19:20:21",
        "updatedAt": "2023-11-23 00:32:12",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1317,
        "submissionId": 1133,
        "pathogenId": 1,
        "createdAt": "2023-10-26 19:28:29",
        "updatedAt": "2023-11-23 03:04:22",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1318,
        "submissionId": 1133,
        "pathogenId": 3,
        "createdAt": "2023-10-26 19:28:29",
        "updatedAt": "2023-11-29 21:19:58",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1319,
        "submissionId": 1133,
        "pathogenId": 4,
        "createdAt": "2023-10-26 19:28:29",
        "updatedAt": "2023-11-29 21:20:00",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1320,
        "submissionId": 1133,
        "pathogenId": 2,
        "createdAt": "2023-10-26 19:28:29",
        "updatedAt": "2023-11-23 03:04:05",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1321,
        "submissionId": 1140,
        "pathogenId": 1,
        "createdAt": "2023-10-31 21:15:25",
        "updatedAt": "2023-11-23 03:06:34",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1322,
        "submissionId": 1140,
        "pathogenId": 3,
        "createdAt": "2023-10-31 21:15:25",
        "updatedAt": "2023-11-29 21:40:29",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1323,
        "submissionId": 1140,
        "pathogenId": 4,
        "createdAt": "2023-10-31 21:15:25",
        "updatedAt": "2023-11-29 21:40:30",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1324,
        "submissionId": 1140,
        "pathogenId": 2,
        "createdAt": "2023-10-31 21:15:25",
        "updatedAt": "2023-11-23 03:06:25",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1325,
        "submissionId": 1156,
        "pathogenId": 1,
        "createdAt": "2023-11-03 15:06:11",
        "updatedAt": "2023-12-06 21:04:45",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1326,
        "submissionId": 1156,
        "pathogenId": 3,
        "createdAt": "2023-11-03 15:06:11",
        "updatedAt": "2023-11-29 22:12:15",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1327,
        "submissionId": 1156,
        "pathogenId": 4,
        "createdAt": "2023-11-03 15:06:11",
        "updatedAt": "2023-11-29 22:12:17",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1328,
        "submissionId": 1156,
        "pathogenId": 2,
        "createdAt": "2023-11-03 15:06:11",
        "updatedAt": "2023-11-23 03:37:49",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1329,
        "submissionId": 1151,
        "pathogenId": 1,
        "createdAt": "2023-11-03 15:14:18",
        "updatedAt": "2023-11-23 02:24:56",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1330,
        "submissionId": 1151,
        "pathogenId": 3,
        "createdAt": "2023-11-03 15:14:18",
        "updatedAt": "2023-11-29 22:01:46",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1331,
        "submissionId": 1151,
        "pathogenId": 4,
        "createdAt": "2023-11-03 15:14:18",
        "updatedAt": "2023-11-29 22:01:47",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1332,
        "submissionId": 1151,
        "pathogenId": 2,
        "createdAt": "2023-11-03 15:14:18",
        "updatedAt": "2023-11-23 02:25:19",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1333,
        "submissionId": 1145,
        "pathogenId": 1,
        "createdAt": "2023-11-03 15:17:23",
        "updatedAt": "2023-11-23 02:18:51",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1334,
        "submissionId": 1145,
        "pathogenId": 3,
        "createdAt": "2023-11-03 15:17:23",
        "updatedAt": "2023-11-29 21:48:24",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1335,
        "submissionId": 1145,
        "pathogenId": 4,
        "createdAt": "2023-11-03 15:17:23",
        "updatedAt": "2023-11-29 21:48:27",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1336,
        "submissionId": 1145,
        "pathogenId": 2,
        "createdAt": "2023-11-03 15:17:23",
        "updatedAt": "2023-11-23 02:18:38",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1337,
        "submissionId": 1158,
        "pathogenId": 1,
        "createdAt": "2023-11-03 15:26:33",
        "updatedAt": "2023-12-12 14:39:58",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1338,
        "submissionId": 1158,
        "pathogenId": 3,
        "createdAt": "2023-11-03 15:26:33",
        "updatedAt": "2023-11-29 22:13:13",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1339,
        "submissionId": 1158,
        "pathogenId": 4,
        "createdAt": "2023-11-03 15:26:33",
        "updatedAt": "2023-11-29 22:13:14",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1340,
        "submissionId": 1158,
        "pathogenId": 2,
        "createdAt": "2023-11-03 15:26:33",
        "updatedAt": "2023-11-23 03:40:41",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1341,
        "submissionId": 1154,
        "pathogenId": 1,
        "createdAt": "2023-11-03 15:39:48",
        "updatedAt": "2023-12-06 20:59:22",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1342,
        "submissionId": 1154,
        "pathogenId": 3,
        "createdAt": "2023-11-03 15:39:48",
        "updatedAt": "2023-11-29 22:02:58",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1343,
        "submissionId": 1154,
        "pathogenId": 4,
        "createdAt": "2023-11-03 15:39:48",
        "updatedAt": "2023-11-29 22:03:00",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1344,
        "submissionId": 1154,
        "pathogenId": 2,
        "createdAt": "2023-11-03 15:39:48",
        "updatedAt": "2023-11-23 02:26:50",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1345,
        "submissionId": 1155,
        "pathogenId": 1,
        "createdAt": "2023-11-03 15:52:34",
        "updatedAt": "2023-11-23 02:31:19",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1346,
        "submissionId": 1155,
        "pathogenId": 3,
        "createdAt": "2023-11-03 15:52:34",
        "updatedAt": "2023-11-29 22:11:16",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1347,
        "submissionId": 1155,
        "pathogenId": 4,
        "createdAt": "2023-11-03 15:52:34",
        "updatedAt": "2023-11-29 22:11:19",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1348,
        "submissionId": 1155,
        "pathogenId": 2,
        "createdAt": "2023-11-03 15:52:34",
        "updatedAt": "2023-11-23 02:30:50",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1349,
        "submissionId": 1146,
        "pathogenId": 1,
        "createdAt": "2023-11-03 15:58:39",
        "updatedAt": "2023-11-23 03:34:17",
        "deletedAt": null,
        "result": "positive"
      },
      {
        "id": 1350,
        "submissionId": 1146,
        "pathogenId": 3,
        "createdAt": "2023-11-03 15:58:39",
        "updatedAt": "2023-11-29 21:49:29",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1351,
        "submissionId": 1146,
        "pathogenId": 4,
        "createdAt": "2023-11-03 15:58:39",
        "updatedAt": "2023-11-29 21:49:30",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1352,
        "submissionId": 1146,
        "pathogenId": 2,
        "createdAt": "2023-11-03 15:58:39",
        "updatedAt": "2023-11-23 03:33:56",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1353,
        "submissionId": 1148,
        "pathogenId": 1,
        "createdAt": "2023-11-03 16:01:58",
        "updatedAt": "2023-11-23 02:23:07",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1354,
        "submissionId": 1148,
        "pathogenId": 3,
        "createdAt": "2023-11-03 16:01:58",
        "updatedAt": "2023-11-29 21:52:05",
        "deletedAt": null,
        "result": "positive"
      },
      {
        "id": 1355,
        "submissionId": 1148,
        "pathogenId": 4,
        "createdAt": "2023-11-03 16:01:58",
        "updatedAt": "2023-11-29 21:52:11",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1356,
        "submissionId": 1148,
        "pathogenId": 2,
        "createdAt": "2023-11-03 16:01:58",
        "updatedAt": "2023-11-23 02:23:27",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1357,
        "submissionId": 1147,
        "pathogenId": 1,
        "createdAt": "2023-11-03 16:55:43",
        "updatedAt": "2023-11-23 02:44:23",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1358,
        "submissionId": 1147,
        "pathogenId": 3,
        "createdAt": "2023-11-03 16:55:43",
        "updatedAt": "2023-11-29 21:50:25",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1359,
        "submissionId": 1147,
        "pathogenId": 4,
        "createdAt": "2023-11-03 16:55:43",
        "updatedAt": "2023-11-29 21:50:26",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1360,
        "submissionId": 1147,
        "pathogenId": 2,
        "createdAt": "2023-11-03 16:55:43",
        "updatedAt": "2023-11-23 02:44:37",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1361,
        "submissionId": 1159,
        "pathogenId": 1,
        "createdAt": "2023-11-03 16:56:46",
        "updatedAt": "2023-11-23 03:42:39",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1362,
        "submissionId": 1159,
        "pathogenId": 3,
        "createdAt": "2023-11-03 16:56:46",
        "updatedAt": "2023-11-29 22:13:55",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1363,
        "submissionId": 1159,
        "pathogenId": 4,
        "createdAt": "2023-11-03 16:56:46",
        "updatedAt": "2023-11-29 22:13:56",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1364,
        "submissionId": 1159,
        "pathogenId": 2,
        "createdAt": "2023-11-03 16:56:46",
        "updatedAt": "2023-11-23 03:42:16",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1365,
        "submissionId": 1160,
        "pathogenId": 1,
        "createdAt": "2023-11-03 16:57:05",
        "updatedAt": "2023-11-23 02:34:10",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1366,
        "submissionId": 1160,
        "pathogenId": 3,
        "createdAt": "2023-11-03 16:57:05",
        "updatedAt": "2023-11-29 22:15:35",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1367,
        "submissionId": 1160,
        "pathogenId": 4,
        "createdAt": "2023-11-03 16:57:05",
        "updatedAt": "2023-11-29 22:15:36",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1368,
        "submissionId": 1160,
        "pathogenId": 2,
        "createdAt": "2023-11-03 16:57:05",
        "updatedAt": "2023-11-23 02:33:09",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1369,
        "submissionId": 1180,
        "pathogenId": 1,
        "createdAt": "2023-11-13 16:40:33",
        "updatedAt": "2023-11-23 03:48:04",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1370,
        "submissionId": 1180,
        "pathogenId": 3,
        "createdAt": "2023-11-13 16:40:33",
        "updatedAt": "2023-11-29 22:54:00",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1371,
        "submissionId": 1180,
        "pathogenId": 4,
        "createdAt": "2023-11-13 16:40:33",
        "updatedAt": "2023-11-29 22:54:01",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1372,
        "submissionId": 1180,
        "pathogenId": 2,
        "createdAt": "2023-11-13 16:40:33",
        "updatedAt": "2023-11-23 03:49:35",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1373,
        "submissionId": 1165,
        "pathogenId": 1,
        "createdAt": "2023-11-13 16:48:16",
        "updatedAt": "2023-11-22 23:50:15",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1374,
        "submissionId": 1165,
        "pathogenId": 3,
        "createdAt": "2023-11-13 16:48:16",
        "updatedAt": "2023-11-29 22:41:24",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1375,
        "submissionId": 1165,
        "pathogenId": 4,
        "createdAt": "2023-11-13 16:48:16",
        "updatedAt": "2023-11-29 22:41:26",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1376,
        "submissionId": 1165,
        "pathogenId": 2,
        "createdAt": "2023-11-13 16:48:16",
        "updatedAt": "2023-11-22 23:50:04",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1377,
        "submissionId": 1162,
        "pathogenId": 1,
        "createdAt": "2023-11-13 16:52:17",
        "updatedAt": "2023-11-22 23:46:41",
        "deletedAt": null,
        "result": "positive"
      },
      {
        "id": 1378,
        "submissionId": 1162,
        "pathogenId": 3,
        "createdAt": "2023-11-13 16:52:17",
        "updatedAt": "2023-11-29 22:16:19",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1379,
        "submissionId": 1162,
        "pathogenId": 4,
        "createdAt": "2023-11-13 16:52:17",
        "updatedAt": "2023-11-29 22:16:21",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1380,
        "submissionId": 1162,
        "pathogenId": 2,
        "createdAt": "2023-11-13 16:52:17",
        "updatedAt": "2023-11-22 23:46:22",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1381,
        "submissionId": 1163,
        "pathogenId": 1,
        "createdAt": "2023-11-13 16:56:20",
        "updatedAt": "2023-11-22 23:48:53",
        "deletedAt": null,
        "result": "positive"
      },
      {
        "id": 1382,
        "submissionId": 1163,
        "pathogenId": 3,
        "createdAt": "2023-11-13 16:56:20",
        "updatedAt": "2023-11-29 22:16:57",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1383,
        "submissionId": 1163,
        "pathogenId": 4,
        "createdAt": "2023-11-13 16:56:20",
        "updatedAt": "2023-11-29 22:16:58",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1384,
        "submissionId": 1163,
        "pathogenId": 2,
        "createdAt": "2023-11-13 16:56:20",
        "updatedAt": "2023-11-22 23:49:07",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1385,
        "submissionId": 1176,
        "pathogenId": 1,
        "createdAt": "2023-11-13 17:01:36",
        "updatedAt": "2023-11-22 23:59:03",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1386,
        "submissionId": 1176,
        "pathogenId": 3,
        "createdAt": "2023-11-13 17:01:36",
        "updatedAt": "2023-11-29 22:52:34",
        "deletedAt": null,
        "result": "positive"
      },
      {
        "id": 1387,
        "submissionId": 1176,
        "pathogenId": 4,
        "createdAt": "2023-11-13 17:01:36",
        "updatedAt": "2023-11-29 22:52:46",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1388,
        "submissionId": 1176,
        "pathogenId": 2,
        "createdAt": "2023-11-13 17:01:36",
        "updatedAt": "2023-11-22 23:58:54",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1389,
        "submissionId": 1175,
        "pathogenId": 1,
        "createdAt": "2023-11-13 17:08:11",
        "updatedAt": "2023-11-22 23:57:16",
        "deletedAt": null,
        "result": "positive"
      },
      {
        "id": 1390,
        "submissionId": 1175,
        "pathogenId": 3,
        "createdAt": "2023-11-13 17:08:11",
        "updatedAt": "2023-11-29 22:51:29",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1391,
        "submissionId": 1175,
        "pathogenId": 4,
        "createdAt": "2023-11-13 17:08:11",
        "updatedAt": "2023-11-29 22:51:31",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1392,
        "submissionId": 1175,
        "pathogenId": 2,
        "createdAt": "2023-11-13 17:08:11",
        "updatedAt": "2023-11-22 23:57:50",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1393,
        "submissionId": 1168,
        "pathogenId": 1,
        "createdAt": "2023-11-13 17:23:25",
        "updatedAt": "2023-11-23 02:36:12",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1394,
        "submissionId": 1168,
        "pathogenId": 3,
        "createdAt": "2023-11-13 17:23:25",
        "updatedAt": "2023-11-29 22:44:20",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1395,
        "submissionId": 1168,
        "pathogenId": 4,
        "createdAt": "2023-11-13 17:23:25",
        "updatedAt": "2023-11-29 22:44:22",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1396,
        "submissionId": 1168,
        "pathogenId": 2,
        "createdAt": "2023-11-13 17:23:25",
        "updatedAt": "2023-11-23 02:35:37",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1397,
        "submissionId": 1166,
        "pathogenId": 1,
        "createdAt": "2023-11-13 17:29:39",
        "updatedAt": "2023-11-22 23:51:21",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1398,
        "submissionId": 1166,
        "pathogenId": 3,
        "createdAt": "2023-11-13 17:29:39",
        "updatedAt": "2023-11-29 22:42:13",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1399,
        "submissionId": 1166,
        "pathogenId": 4,
        "createdAt": "2023-11-13 17:29:39",
        "updatedAt": "2023-11-29 22:42:15",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1400,
        "submissionId": 1166,
        "pathogenId": 2,
        "createdAt": "2023-11-13 17:29:39",
        "updatedAt": "2023-11-22 23:51:23",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1401,
        "submissionId": 1169,
        "pathogenId": 1,
        "createdAt": "2023-11-13 17:45:08",
        "updatedAt": "2023-11-22 23:53:26",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1402,
        "submissionId": 1169,
        "pathogenId": 3,
        "createdAt": "2023-11-13 17:45:08",
        "updatedAt": "2023-11-29 22:45:16",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1403,
        "submissionId": 1169,
        "pathogenId": 4,
        "createdAt": "2023-11-13 17:45:08",
        "updatedAt": "2023-11-29 22:45:18",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1404,
        "submissionId": 1169,
        "pathogenId": 2,
        "createdAt": "2023-11-13 17:45:08",
        "updatedAt": "2023-11-22 23:53:15",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1405,
        "submissionId": 1171,
        "pathogenId": 1,
        "createdAt": "2023-11-13 17:54:14",
        "updatedAt": "2023-11-23 02:41:23",
        "deletedAt": null,
        "result": "positive"
      },
      {
        "id": 1406,
        "submissionId": 1171,
        "pathogenId": 3,
        "createdAt": "2023-11-13 17:54:14",
        "updatedAt": "2023-11-29 22:46:26",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1407,
        "submissionId": 1171,
        "pathogenId": 4,
        "createdAt": "2023-11-13 17:54:14",
        "updatedAt": "2023-11-29 22:46:28",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1408,
        "submissionId": 1171,
        "pathogenId": 2,
        "createdAt": "2023-11-13 17:54:14",
        "updatedAt": "2023-11-23 02:41:04",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1409,
        "submissionId": 1170,
        "pathogenId": 1,
        "createdAt": "2023-11-13 17:55:29",
        "updatedAt": "2023-11-23 02:39:33",
        "deletedAt": null,
        "result": "positive"
      },
      {
        "id": 1410,
        "submissionId": 1170,
        "pathogenId": 3,
        "createdAt": "2023-11-13 17:55:29",
        "updatedAt": "2023-11-29 22:45:47",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1411,
        "submissionId": 1170,
        "pathogenId": 4,
        "createdAt": "2023-11-13 17:55:29",
        "updatedAt": "2023-11-29 22:45:49",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1412,
        "submissionId": 1170,
        "pathogenId": 2,
        "createdAt": "2023-11-13 17:55:29",
        "updatedAt": "2023-11-23 02:39:24",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1413,
        "submissionId": 1173,
        "pathogenId": 1,
        "createdAt": "2023-11-13 18:08:25",
        "updatedAt": "2023-11-23 03:15:07",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1414,
        "submissionId": 1173,
        "pathogenId": 3,
        "createdAt": "2023-11-13 18:08:25",
        "updatedAt": "2023-11-29 22:47:47",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1415,
        "submissionId": 1173,
        "pathogenId": 4,
        "createdAt": "2023-11-13 18:08:25",
        "updatedAt": "2023-11-29 22:47:48",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1416,
        "submissionId": 1173,
        "pathogenId": 2,
        "createdAt": "2023-11-13 18:08:25",
        "updatedAt": "2023-11-23 03:14:47",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1417,
        "submissionId": 1172,
        "pathogenId": 1,
        "createdAt": "2023-11-13 18:10:02",
        "updatedAt": "2023-11-23 03:12:35",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1418,
        "submissionId": 1172,
        "pathogenId": 3,
        "createdAt": "2023-11-13 18:10:02",
        "updatedAt": "2023-11-29 22:47:12",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1419,
        "submissionId": 1172,
        "pathogenId": 4,
        "createdAt": "2023-11-13 18:10:02",
        "updatedAt": "2023-11-29 22:47:13",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1420,
        "submissionId": 1172,
        "pathogenId": 2,
        "createdAt": "2023-11-13 18:10:02",
        "updatedAt": "2023-11-23 03:13:00",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1421,
        "submissionId": 1167,
        "pathogenId": 1,
        "createdAt": "2023-11-13 18:17:03",
        "updatedAt": "2023-11-23 03:10:56",
        "deletedAt": null,
        "result": "positive"
      },
      {
        "id": 1422,
        "submissionId": 1167,
        "pathogenId": 3,
        "createdAt": "2023-11-13 18:17:03",
        "updatedAt": "2023-11-29 22:43:31",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1423,
        "submissionId": 1167,
        "pathogenId": 4,
        "createdAt": "2023-11-13 18:17:03",
        "updatedAt": "2023-11-29 22:43:32",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1424,
        "submissionId": 1167,
        "pathogenId": 2,
        "createdAt": "2023-11-13 18:17:03",
        "updatedAt": "2023-11-23 03:11:26",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1425,
        "submissionId": 1164,
        "pathogenId": 1,
        "createdAt": "2023-11-13 18:19:54",
        "updatedAt": "2023-11-23 03:44:18",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1426,
        "submissionId": 1164,
        "pathogenId": 3,
        "createdAt": "2023-11-13 18:19:54",
        "updatedAt": "2023-11-29 22:18:40",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1427,
        "submissionId": 1164,
        "pathogenId": 4,
        "createdAt": "2023-11-13 18:19:54",
        "updatedAt": "2023-11-29 22:18:22",
        "deletedAt": null,
        "result": "positive"
      },
      {
        "id": 1428,
        "submissionId": 1164,
        "pathogenId": 2,
        "createdAt": "2023-11-13 18:19:54",
        "updatedAt": "2023-11-23 03:44:06",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1429,
        "submissionId": 1149,
        "pathogenId": 1,
        "createdAt": "2023-11-13 18:26:55",
        "updatedAt": "2023-11-23 03:08:10",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1430,
        "submissionId": 1149,
        "pathogenId": 3,
        "createdAt": "2023-11-13 18:26:55",
        "updatedAt": "2023-11-29 21:53:28",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1431,
        "submissionId": 1149,
        "pathogenId": 4,
        "createdAt": "2023-11-13 18:26:55",
        "updatedAt": "2023-11-29 21:53:29",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1432,
        "submissionId": 1149,
        "pathogenId": 2,
        "createdAt": "2023-11-13 18:26:55",
        "updatedAt": "2023-11-23 03:07:58",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1433,
        "submissionId": 1152,
        "pathogenId": 1,
        "createdAt": "2023-11-13 18:38:07",
        "updatedAt": "2023-11-23 03:36:11",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1434,
        "submissionId": 1152,
        "pathogenId": 3,
        "createdAt": "2023-11-13 18:38:07",
        "updatedAt": "2023-11-29 22:02:20",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1435,
        "submissionId": 1152,
        "pathogenId": 4,
        "createdAt": "2023-11-13 18:38:07",
        "updatedAt": "2023-11-29 22:02:22",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1436,
        "submissionId": 1152,
        "pathogenId": 2,
        "createdAt": "2023-11-13 18:38:07",
        "updatedAt": "2023-11-23 03:35:06",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1437,
        "submissionId": 1150,
        "pathogenId": 1,
        "createdAt": "2023-11-13 20:30:25",
        "updatedAt": "2023-11-23 03:09:28",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1438,
        "submissionId": 1150,
        "pathogenId": 3,
        "createdAt": "2023-11-13 20:30:25",
        "updatedAt": "2023-11-29 21:58:00",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1439,
        "submissionId": 1150,
        "pathogenId": 4,
        "createdAt": "2023-11-13 20:30:25",
        "updatedAt": "2023-11-29 21:58:02",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1440,
        "submissionId": 1150,
        "pathogenId": 2,
        "createdAt": "2023-11-13 20:30:25",
        "updatedAt": "2023-11-23 03:09:17",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1441,
        "submissionId": 1182,
        "pathogenId": 1,
        "createdAt": "2023-11-15 15:40:54",
        "updatedAt": "2023-11-23 03:50:27",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1442,
        "submissionId": 1182,
        "pathogenId": 3,
        "createdAt": "2023-11-15 15:40:54",
        "updatedAt": "2023-11-29 22:54:55",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1443,
        "submissionId": 1182,
        "pathogenId": 4,
        "createdAt": "2023-11-15 15:40:54",
        "updatedAt": "2023-11-29 22:54:56",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1444,
        "submissionId": 1182,
        "pathogenId": 2,
        "createdAt": "2023-11-15 15:40:54",
        "updatedAt": "2023-11-23 03:51:23",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1445,
        "submissionId": 1143,
        "pathogenId": 1,
        "createdAt": "2023-11-15 15:47:03",
        "updatedAt": "2023-11-22 23:43:24",
        "deletedAt": null,
        "result": "positive"
      },
      {
        "id": 1446,
        "submissionId": 1143,
        "pathogenId": 3,
        "createdAt": "2023-11-15 15:47:03",
        "updatedAt": "2023-11-29 21:42:23",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1447,
        "submissionId": 1143,
        "pathogenId": 4,
        "createdAt": "2023-11-15 15:47:03",
        "updatedAt": "2023-11-29 21:42:28",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1448,
        "submissionId": 1143,
        "pathogenId": 2,
        "createdAt": "2023-11-15 15:47:03",
        "updatedAt": "2023-11-22 23:43:26",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1449,
        "submissionId": 1142,
        "pathogenId": 1,
        "createdAt": "2023-11-15 15:56:02",
        "updatedAt": "2023-11-22 23:40:18",
        "deletedAt": null,
        "result": "positive"
      },
      {
        "id": 1450,
        "submissionId": 1142,
        "pathogenId": 3,
        "createdAt": "2023-11-15 15:56:02",
        "updatedAt": "2023-11-29 21:41:11",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1451,
        "submissionId": 1142,
        "pathogenId": 4,
        "createdAt": "2023-11-15 15:56:02",
        "updatedAt": "2023-11-29 21:41:13",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1452,
        "submissionId": 1142,
        "pathogenId": 2,
        "createdAt": "2023-11-15 15:56:02",
        "updatedAt": "2023-11-22 23:40:23",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1453,
        "submissionId": 1195,
        "pathogenId": 1,
        "createdAt": "2023-11-15 16:27:46",
        "updatedAt": "2023-12-21 18:42:15",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1454,
        "submissionId": 1195,
        "pathogenId": 3,
        "createdAt": "2023-11-15 16:27:46",
        "updatedAt": "2023-11-29 23:03:22",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1455,
        "submissionId": 1195,
        "pathogenId": 4,
        "createdAt": "2023-11-15 16:27:46",
        "updatedAt": "2023-11-29 23:03:23",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1456,
        "submissionId": 1195,
        "pathogenId": 2,
        "createdAt": "2023-11-15 16:27:46",
        "updatedAt": "2023-11-23 03:52:17",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1457,
        "submissionId": 1174,
        "pathogenId": 1,
        "createdAt": "2023-11-15 21:02:31",
        "updatedAt": "2023-12-12 14:36:28",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1458,
        "submissionId": 1174,
        "pathogenId": 3,
        "createdAt": "2023-11-15 21:02:31",
        "updatedAt": "2023-11-29 22:49:08",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1459,
        "submissionId": 1174,
        "pathogenId": 4,
        "createdAt": "2023-11-15 21:02:31",
        "updatedAt": "2023-11-29 22:49:05",
        "deletedAt": null,
        "result": "positive"
      },
      {
        "id": 1460,
        "submissionId": 1174,
        "pathogenId": 2,
        "createdAt": "2023-11-15 21:02:31",
        "updatedAt": "2023-11-23 03:46:12",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1461,
        "submissionId": 1187,
        "pathogenId": 1,
        "createdAt": "2023-11-16 19:59:57",
        "updatedAt": "2023-11-23 03:22:42",
        "deletedAt": null,
        "result": "positive"
      },
      {
        "id": 1462,
        "submissionId": 1187,
        "pathogenId": 3,
        "createdAt": "2023-11-16 19:59:57",
        "updatedAt": "2023-11-29 22:57:21",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1463,
        "submissionId": 1187,
        "pathogenId": 4,
        "createdAt": "2023-11-16 19:59:57",
        "updatedAt": "2023-11-29 22:57:23",
        "deletedAt": null,
        "result": "positive"
      },
      {
        "id": 1464,
        "submissionId": 1187,
        "pathogenId": 2,
        "createdAt": "2023-11-16 19:59:57",
        "updatedAt": "2023-11-23 03:22:31",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1465,
        "submissionId": 1184,
        "pathogenId": 1,
        "createdAt": "2023-11-16 20:14:54",
        "updatedAt": "2023-11-23 03:17:13",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1466,
        "submissionId": 1184,
        "pathogenId": 3,
        "createdAt": "2023-11-16 20:14:54",
        "updatedAt": "2023-11-29 22:56:17",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1467,
        "submissionId": 1184,
        "pathogenId": 4,
        "createdAt": "2023-11-16 20:14:54",
        "updatedAt": "2023-11-29 22:56:19",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1468,
        "submissionId": 1184,
        "pathogenId": 2,
        "createdAt": "2023-11-16 20:14:54",
        "updatedAt": "2023-11-23 03:17:39",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1469,
        "submissionId": 1196,
        "pathogenId": 1,
        "createdAt": "2023-11-17 16:59:25",
        "updatedAt": "2023-11-23 03:24:31",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1470,
        "submissionId": 1196,
        "pathogenId": 3,
        "createdAt": "2023-11-17 16:59:25",
        "updatedAt": "2023-11-29 23:05:36",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1471,
        "submissionId": 1196,
        "pathogenId": 4,
        "createdAt": "2023-11-17 16:59:25",
        "updatedAt": "2023-11-29 23:05:32",
        "deletedAt": null,
        "result": "positive"
      },
      {
        "id": 1472,
        "submissionId": 1196,
        "pathogenId": 2,
        "createdAt": "2023-11-17 16:59:25",
        "updatedAt": "2023-11-23 03:24:19",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1473,
        "submissionId": 1188,
        "pathogenId": 1,
        "createdAt": "2023-11-20 22:55:01",
        "updatedAt": "2023-11-23 04:02:44",
        "deletedAt": null,
        "result": "positive"
      },
      {
        "id": 1474,
        "submissionId": 1188,
        "pathogenId": 3,
        "createdAt": "2023-11-20 22:55:01",
        "updatedAt": "2023-12-14 21:16:48",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1475,
        "submissionId": 1188,
        "pathogenId": 4,
        "createdAt": "2023-11-20 22:55:01",
        "updatedAt": "2023-12-14 21:17:10",
        "deletedAt": null,
        "result": "positive"
      },
      {
        "id": 1476,
        "submissionId": 1188,
        "pathogenId": 2,
        "createdAt": "2023-11-20 22:55:01",
        "updatedAt": "2023-11-23 04:03:04",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1477,
        "submissionId": 1192,
        "pathogenId": 1,
        "createdAt": "2023-11-20 23:00:22",
        "updatedAt": "2023-11-23 04:09:19",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1478,
        "submissionId": 1192,
        "pathogenId": 3,
        "createdAt": "2023-11-20 23:00:22",
        "updatedAt": "2023-11-29 23:02:39",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1479,
        "submissionId": 1192,
        "pathogenId": 4,
        "createdAt": "2023-11-20 23:00:22",
        "updatedAt": "2023-11-29 23:02:40",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1480,
        "submissionId": 1192,
        "pathogenId": 2,
        "createdAt": "2023-11-20 23:00:22",
        "updatedAt": "2023-11-23 04:08:35",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1481,
        "submissionId": 1191,
        "pathogenId": 1,
        "createdAt": "2023-11-20 23:14:01",
        "updatedAt": "2023-11-23 04:05:46",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1482,
        "submissionId": 1191,
        "pathogenId": 3,
        "createdAt": "2023-11-20 23:14:01",
        "updatedAt": "2023-11-29 23:01:17",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1483,
        "submissionId": 1191,
        "pathogenId": 4,
        "createdAt": "2023-11-20 23:14:01",
        "updatedAt": "2023-11-29 23:01:19",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1484,
        "submissionId": 1191,
        "pathogenId": 2,
        "createdAt": "2023-11-20 23:14:01",
        "updatedAt": "2023-11-23 04:06:12",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1485,
        "submissionId": 1183,
        "pathogenId": 1,
        "createdAt": "2023-11-20 23:16:45",
        "updatedAt": "2023-11-23 03:58:42",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1486,
        "submissionId": 1183,
        "pathogenId": 3,
        "createdAt": "2023-11-20 23:16:45",
        "updatedAt": "2023-11-29 22:55:42",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1487,
        "submissionId": 1183,
        "pathogenId": 4,
        "createdAt": "2023-11-20 23:16:45",
        "updatedAt": "2023-11-29 22:55:43",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1488,
        "submissionId": 1183,
        "pathogenId": 2,
        "createdAt": "2023-11-20 23:16:45",
        "updatedAt": "2023-11-23 03:58:43",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1489,
        "submissionId": 1197,
        "pathogenId": 1,
        "createdAt": "2023-11-30 16:46:40",
        "updatedAt": "2023-12-06 18:45:39",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1490,
        "submissionId": 1197,
        "pathogenId": 3,
        "createdAt": "2023-11-30 16:46:40",
        "updatedAt": "2023-12-06 19:25:21",
        "deletedAt": null,
        "result": "positive"
      },
      {
        "id": 1491,
        "submissionId": 1197,
        "pathogenId": 4,
        "createdAt": "2023-11-30 16:46:40",
        "updatedAt": "2023-12-06 19:43:14",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1492,
        "submissionId": 1197,
        "pathogenId": 2,
        "createdAt": "2023-11-30 16:46:40",
        "updatedAt": "2023-12-06 19:01:43",
        "deletedAt": null,
        "result": "positive"
      },
      {
        "id": 1493,
        "submissionId": 1198,
        "pathogenId": 1,
        "createdAt": "2023-11-30 16:56:34",
        "updatedAt": "2023-12-06 18:46:26",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1494,
        "submissionId": 1198,
        "pathogenId": 3,
        "createdAt": "2023-11-30 16:56:34",
        "updatedAt": "2023-12-06 19:26:17",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1495,
        "submissionId": 1198,
        "pathogenId": 4,
        "createdAt": "2023-11-30 16:56:34",
        "updatedAt": "2023-12-06 19:44:35",
        "deletedAt": null,
        "result": "positive"
      },
      {
        "id": 1496,
        "submissionId": 1198,
        "pathogenId": 2,
        "createdAt": "2023-11-30 16:56:34",
        "updatedAt": "2023-12-06 19:02:36",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1497,
        "submissionId": 1199,
        "pathogenId": 1,
        "createdAt": "2023-11-30 17:04:36",
        "updatedAt": "2023-12-06 18:47:40",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1498,
        "submissionId": 1199,
        "pathogenId": 3,
        "createdAt": "2023-11-30 17:04:36",
        "updatedAt": "2023-12-07 18:40:23",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1499,
        "submissionId": 1199,
        "pathogenId": 4,
        "createdAt": "2023-11-30 17:04:36",
        "updatedAt": "2023-12-06 19:46:30",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1500,
        "submissionId": 1199,
        "pathogenId": 2,
        "createdAt": "2023-11-30 17:04:36",
        "updatedAt": "2023-12-06 19:03:47",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1501,
        "submissionId": 1203,
        "pathogenId": 1,
        "createdAt": "2023-11-30 17:10:45",
        "updatedAt": "2023-12-06 18:50:00",
        "deletedAt": null,
        "result": "positive"
      },
      {
        "id": 1502,
        "submissionId": 1203,
        "pathogenId": 3,
        "createdAt": "2023-11-30 17:10:45",
        "updatedAt": "2023-12-06 19:31:43",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1503,
        "submissionId": 1203,
        "pathogenId": 4,
        "createdAt": "2023-11-30 17:10:45",
        "updatedAt": "2023-12-06 19:53:48",
        "deletedAt": null,
        "result": "positive"
      },
      {
        "id": 1504,
        "submissionId": 1203,
        "pathogenId": 2,
        "createdAt": "2023-11-30 17:10:45",
        "updatedAt": "2023-12-06 19:05:53",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1505,
        "submissionId": 1204,
        "pathogenId": 1,
        "createdAt": "2023-11-30 17:18:04",
        "updatedAt": "2023-12-06 18:51:04",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1506,
        "submissionId": 1204,
        "pathogenId": 3,
        "createdAt": "2023-11-30 17:18:04",
        "updatedAt": "2023-12-06 19:32:37",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1507,
        "submissionId": 1204,
        "pathogenId": 4,
        "createdAt": "2023-11-30 17:18:04",
        "updatedAt": "2023-12-06 20:00:34",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1508,
        "submissionId": 1204,
        "pathogenId": 2,
        "createdAt": "2023-11-30 17:18:04",
        "updatedAt": "2023-12-06 19:06:32",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1509,
        "submissionId": 1200,
        "pathogenId": 1,
        "createdAt": "2023-11-30 17:25:05",
        "updatedAt": "2023-12-06 18:48:24",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1510,
        "submissionId": 1200,
        "pathogenId": 3,
        "createdAt": "2023-11-30 17:25:05",
        "updatedAt": "2023-12-07 18:41:43",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1511,
        "submissionId": 1200,
        "pathogenId": 4,
        "createdAt": "2023-11-30 17:25:05",
        "updatedAt": "2023-12-06 19:48:28",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1512,
        "submissionId": 1200,
        "pathogenId": 2,
        "createdAt": "2023-11-30 17:25:05",
        "updatedAt": "2023-12-06 19:04:19",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1513,
        "submissionId": 1181,
        "pathogenId": 1,
        "createdAt": "2023-11-30 17:32:04",
        "updatedAt": "2023-12-06 18:02:25",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1514,
        "submissionId": 1181,
        "pathogenId": 3,
        "createdAt": "2023-11-30 17:32:04",
        "updatedAt": "2023-12-06 19:19:28",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1515,
        "submissionId": 1181,
        "pathogenId": 4,
        "createdAt": "2023-11-30 17:32:04",
        "updatedAt": "2023-12-06 19:38:41",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1516,
        "submissionId": 1181,
        "pathogenId": 2,
        "createdAt": "2023-11-30 17:32:04",
        "updatedAt": "2023-12-06 18:56:35",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1517,
        "submissionId": 1179,
        "pathogenId": 1,
        "createdAt": "2023-11-30 17:37:44",
        "updatedAt": "2023-12-06 18:00:39",
        "deletedAt": null,
        "result": "positive"
      },
      {
        "id": 1518,
        "submissionId": 1179,
        "pathogenId": 3,
        "createdAt": "2023-11-30 17:37:44",
        "updatedAt": "2023-12-06 19:18:34",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1519,
        "submissionId": 1179,
        "pathogenId": 4,
        "createdAt": "2023-11-30 17:37:44",
        "updatedAt": "2023-12-06 19:37:36",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1520,
        "submissionId": 1179,
        "pathogenId": 2,
        "createdAt": "2023-11-30 17:37:44",
        "updatedAt": "2023-12-06 18:56:02",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1521,
        "submissionId": 1190,
        "pathogenId": 5,
        "createdAt": "2023-11-30 17:40:45",
        "updatedAt": "2024-01-11 21:08:56",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1522,
        "submissionId": 1190,
        "pathogenId": 6,
        "createdAt": "2023-11-30 17:40:45",
        "updatedAt": "2024-01-11 21:08:57",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1523,
        "submissionId": 1189,
        "pathogenId": 1,
        "createdAt": "2023-11-30 17:48:06",
        "updatedAt": "2023-12-06 18:07:06",
        "deletedAt": null,
        "result": "positive"
      },
      {
        "id": 1524,
        "submissionId": 1189,
        "pathogenId": 3,
        "createdAt": "2023-11-30 17:48:06",
        "updatedAt": "2023-12-06 19:22:07",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1525,
        "submissionId": 1189,
        "pathogenId": 4,
        "createdAt": "2023-11-30 17:48:06",
        "updatedAt": "2023-12-06 19:41:12",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1526,
        "submissionId": 1189,
        "pathogenId": 2,
        "createdAt": "2023-11-30 17:48:06",
        "updatedAt": "2023-12-06 18:58:26",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1527,
        "submissionId": 1194,
        "pathogenId": 1,
        "createdAt": "2023-11-30 18:39:34",
        "updatedAt": "2023-12-06 18:44:57",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1528,
        "submissionId": 1194,
        "pathogenId": 3,
        "createdAt": "2023-11-30 18:39:34",
        "updatedAt": "2023-12-06 19:23:51",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1529,
        "submissionId": 1194,
        "pathogenId": 4,
        "createdAt": "2023-11-30 18:39:34",
        "updatedAt": "2023-12-06 19:42:27",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1530,
        "submissionId": 1194,
        "pathogenId": 2,
        "createdAt": "2023-11-30 18:39:34",
        "updatedAt": "2023-12-06 19:00:01",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1531,
        "submissionId": 1193,
        "pathogenId": 1,
        "createdAt": "2023-11-30 18:44:02",
        "updatedAt": "2023-12-06 18:08:25",
        "deletedAt": null,
        "result": "positive"
      },
      {
        "id": 1532,
        "submissionId": 1193,
        "pathogenId": 3,
        "createdAt": "2023-11-30 18:44:02",
        "updatedAt": "2023-12-06 19:23:03",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1533,
        "submissionId": 1193,
        "pathogenId": 4,
        "createdAt": "2023-11-30 18:44:02",
        "updatedAt": "2023-12-06 19:41:42",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1534,
        "submissionId": 1193,
        "pathogenId": 2,
        "createdAt": "2023-11-30 18:44:02",
        "updatedAt": "2023-12-06 18:59:22",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1535,
        "submissionId": 1186,
        "pathogenId": 1,
        "createdAt": "2023-11-30 19:05:07",
        "updatedAt": "2023-12-06 18:05:29",
        "deletedAt": null,
        "result": "positive"
      },
      {
        "id": 1536,
        "submissionId": 1186,
        "pathogenId": 3,
        "createdAt": "2023-11-30 19:05:07",
        "updatedAt": "2023-12-06 19:21:16",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1537,
        "submissionId": 1186,
        "pathogenId": 4,
        "createdAt": "2023-11-30 19:05:07",
        "updatedAt": "2023-12-06 19:40:38",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1538,
        "submissionId": 1186,
        "pathogenId": 2,
        "createdAt": "2023-11-30 19:05:07",
        "updatedAt": "2023-12-06 18:57:59",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1539,
        "submissionId": 1185,
        "pathogenId": 1,
        "createdAt": "2023-11-30 19:08:16",
        "updatedAt": "2023-12-06 18:03:55",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1540,
        "submissionId": 1185,
        "pathogenId": 3,
        "createdAt": "2023-11-30 19:08:16",
        "updatedAt": "2023-12-06 19:20:32",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1541,
        "submissionId": 1185,
        "pathogenId": 4,
        "createdAt": "2023-11-30 19:08:16",
        "updatedAt": "2023-12-06 19:39:52",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1542,
        "submissionId": 1185,
        "pathogenId": 2,
        "createdAt": "2023-11-30 19:08:16",
        "updatedAt": "2023-12-06 18:57:18",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1543,
        "submissionId": 1202,
        "pathogenId": 1,
        "createdAt": "2023-11-30 19:12:09",
        "updatedAt": "2023-12-06 18:49:04",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1544,
        "submissionId": 1202,
        "pathogenId": 3,
        "createdAt": "2023-11-30 19:12:09",
        "updatedAt": "2023-12-07 18:42:02",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1545,
        "submissionId": 1202,
        "pathogenId": 4,
        "createdAt": "2023-11-30 19:12:09",
        "updatedAt": "2023-12-06 19:49:12",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1546,
        "submissionId": 1202,
        "pathogenId": 2,
        "createdAt": "2023-11-30 19:12:09",
        "updatedAt": "2023-12-06 19:05:07",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1547,
        "submissionId": 1209,
        "pathogenId": 1,
        "createdAt": "2023-11-30 19:27:24",
        "updatedAt": "2023-12-06 18:53:01",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1548,
        "submissionId": 1209,
        "pathogenId": 3,
        "createdAt": "2023-11-30 19:27:24",
        "updatedAt": "2023-12-14 21:12:13",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1549,
        "submissionId": 1209,
        "pathogenId": 4,
        "createdAt": "2023-11-30 19:27:24",
        "updatedAt": "2023-12-14 21:11:43",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1550,
        "submissionId": 1209,
        "pathogenId": 2,
        "createdAt": "2023-11-30 19:27:24",
        "updatedAt": "2023-12-06 19:09:15",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1551,
        "submissionId": 1208,
        "pathogenId": 1,
        "createdAt": "2023-11-30 19:32:27",
        "updatedAt": "2023-12-06 18:52:24",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1552,
        "submissionId": 1208,
        "pathogenId": 3,
        "createdAt": "2023-11-30 19:32:27",
        "updatedAt": "2023-12-06 19:33:25",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1553,
        "submissionId": 1208,
        "pathogenId": 4,
        "createdAt": "2023-11-30 19:32:27",
        "updatedAt": "2023-12-06 20:01:30",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1554,
        "submissionId": 1208,
        "pathogenId": 2,
        "createdAt": "2023-11-30 19:32:27",
        "updatedAt": "2023-12-06 19:07:24",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1555,
        "submissionId": 1213,
        "pathogenId": 1,
        "createdAt": "2023-12-04 16:57:26",
        "updatedAt": "2023-12-06 18:54:47",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1556,
        "submissionId": 1213,
        "pathogenId": 3,
        "createdAt": "2023-12-04 16:57:26",
        "updatedAt": "2023-12-06 19:34:51",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1557,
        "submissionId": 1213,
        "pathogenId": 4,
        "createdAt": "2023-12-04 16:57:26",
        "updatedAt": "2023-12-06 20:03:09",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1558,
        "submissionId": 1213,
        "pathogenId": 2,
        "createdAt": "2023-12-04 16:57:26",
        "updatedAt": "2023-12-06 19:09:47",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1559,
        "submissionId": 1212,
        "pathogenId": 1,
        "createdAt": "2023-12-08 21:52:19",
        "updatedAt": "2023-12-14 14:50:05",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1560,
        "submissionId": 1212,
        "pathogenId": 3,
        "createdAt": "2023-12-08 21:52:19",
        "updatedAt": "2023-12-14 20:55:57",
        "deletedAt": null,
        "result": "positive"
      },
      {
        "id": 1561,
        "submissionId": 1212,
        "pathogenId": 4,
        "createdAt": "2023-12-08 21:52:19",
        "updatedAt": "2023-12-14 20:56:13",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1562,
        "submissionId": 1212,
        "pathogenId": 2,
        "createdAt": "2023-12-08 21:52:19",
        "updatedAt": "2023-12-14 14:50:07",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1563,
        "submissionId": 1206,
        "pathogenId": 1,
        "createdAt": "2023-12-08 22:18:50",
        "updatedAt": "2023-12-14 14:48:53",
        "deletedAt": null,
        "result": "positive"
      },
      {
        "id": 1564,
        "submissionId": 1206,
        "pathogenId": 3,
        "createdAt": "2023-12-08 22:18:50",
        "updatedAt": "2023-12-14 20:55:10",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1565,
        "submissionId": 1206,
        "pathogenId": 4,
        "createdAt": "2023-12-08 22:18:50",
        "updatedAt": "2023-12-14 20:55:12",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1566,
        "submissionId": 1206,
        "pathogenId": 2,
        "createdAt": "2023-12-08 22:18:50",
        "updatedAt": "2023-12-14 14:48:56",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1567,
        "submissionId": 1210,
        "pathogenId": 1,
        "createdAt": "2023-12-08 22:25:00",
        "updatedAt": "2023-12-14 14:49:49",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1568,
        "submissionId": 1210,
        "pathogenId": 3,
        "createdAt": "2023-12-08 22:25:00",
        "updatedAt": "2023-12-14 20:55:41",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1569,
        "submissionId": 1210,
        "pathogenId": 4,
        "createdAt": "2023-12-08 22:25:00",
        "updatedAt": "2023-12-14 20:55:43",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1570,
        "submissionId": 1210,
        "pathogenId": 2,
        "createdAt": "2023-12-08 22:25:00",
        "updatedAt": "2023-12-14 14:49:50",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1571,
        "submissionId": 1205,
        "pathogenId": 1,
        "createdAt": "2023-12-08 23:02:10",
        "updatedAt": "2023-12-14 14:48:06",
        "deletedAt": null,
        "result": "positive"
      },
      {
        "id": 1572,
        "submissionId": 1205,
        "pathogenId": 3,
        "createdAt": "2023-12-08 23:02:10",
        "updatedAt": "2023-12-14 20:54:52",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1573,
        "submissionId": 1205,
        "pathogenId": 4,
        "createdAt": "2023-12-08 23:02:10",
        "updatedAt": "2023-12-14 20:54:54",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1574,
        "submissionId": 1205,
        "pathogenId": 2,
        "createdAt": "2023-12-08 23:02:10",
        "updatedAt": "2023-12-14 14:48:11",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1575,
        "submissionId": 1217,
        "pathogenId": 1,
        "createdAt": "2023-12-14 22:47:29",
        "updatedAt": "2023-12-20 01:07:13",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1576,
        "submissionId": 1217,
        "pathogenId": 3,
        "createdAt": "2023-12-14 22:47:29",
        "updatedAt": "2023-12-19 23:02:46",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1577,
        "submissionId": 1217,
        "pathogenId": 4,
        "createdAt": "2023-12-14 22:47:29",
        "updatedAt": "2023-12-19 23:07:18",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1578,
        "submissionId": 1217,
        "pathogenId": 2,
        "createdAt": "2023-12-14 22:47:29",
        "updatedAt": "2023-12-20 01:05:17",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1579,
        "submissionId": 1216,
        "pathogenId": 1,
        "createdAt": "2023-12-14 22:50:20",
        "updatedAt": "2023-12-20 01:06:59",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1580,
        "submissionId": 1216,
        "pathogenId": 3,
        "createdAt": "2023-12-14 22:50:20",
        "updatedAt": "2023-12-19 23:02:28",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1581,
        "submissionId": 1216,
        "pathogenId": 4,
        "createdAt": "2023-12-14 22:50:20",
        "updatedAt": "2023-12-19 23:06:55",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1582,
        "submissionId": 1216,
        "pathogenId": 2,
        "createdAt": "2023-12-14 22:50:20",
        "updatedAt": "2023-12-20 01:05:06",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1583,
        "submissionId": 1214,
        "pathogenId": 1,
        "createdAt": "2023-12-14 22:50:50",
        "updatedAt": "2023-12-20 01:06:18",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1584,
        "submissionId": 1214,
        "pathogenId": 3,
        "createdAt": "2023-12-14 22:50:50",
        "updatedAt": "2023-12-19 23:01:12",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1585,
        "submissionId": 1214,
        "pathogenId": 4,
        "createdAt": "2023-12-14 22:50:50",
        "updatedAt": "2023-12-19 23:06:21",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1586,
        "submissionId": 1214,
        "pathogenId": 2,
        "createdAt": "2023-12-14 22:50:50",
        "updatedAt": "2023-12-20 01:04:28",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1587,
        "submissionId": 1215,
        "pathogenId": 1,
        "createdAt": "2023-12-18 19:20:41",
        "updatedAt": "2023-12-20 01:06:33",
        "deletedAt": null,
        "result": "positive"
      },
      {
        "id": 1588,
        "submissionId": 1215,
        "pathogenId": 3,
        "createdAt": "2023-12-18 19:20:41",
        "updatedAt": "2023-12-19 23:02:18",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1589,
        "submissionId": 1215,
        "pathogenId": 4,
        "createdAt": "2023-12-18 19:20:41",
        "updatedAt": "2023-12-19 23:06:32",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1590,
        "submissionId": 1215,
        "pathogenId": 2,
        "createdAt": "2023-12-18 19:20:41",
        "updatedAt": "2023-12-20 01:04:38",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1591,
        "submissionId": 1220,
        "pathogenId": 5,
        "createdAt": "2023-12-18 19:41:08",
        "updatedAt": "2024-01-11 21:09:16",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1592,
        "submissionId": 1220,
        "pathogenId": 6,
        "createdAt": "2023-12-18 19:41:08",
        "updatedAt": "2024-01-11 21:09:17",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1593,
        "submissionId": 1218,
        "pathogenId": 1,
        "createdAt": "2023-12-18 19:41:23",
        "updatedAt": "2023-12-20 01:07:27",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1594,
        "submissionId": 1218,
        "pathogenId": 3,
        "createdAt": "2023-12-18 19:41:23",
        "updatedAt": "2023-12-19 23:03:05",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1595,
        "submissionId": 1218,
        "pathogenId": 4,
        "createdAt": "2023-12-18 19:41:23",
        "updatedAt": "2023-12-19 23:07:34",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1596,
        "submissionId": 1218,
        "pathogenId": 2,
        "createdAt": "2023-12-18 19:41:23",
        "updatedAt": "2023-12-20 01:05:27",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1597,
        "submissionId": 1223,
        "pathogenId": 1,
        "createdAt": "2024-01-04 21:55:30",
        "updatedAt": "2024-01-11 21:37:52",
        "deletedAt": null,
        "result": "positive"
      },
      {
        "id": 1598,
        "submissionId": 1223,
        "pathogenId": 3,
        "createdAt": "2024-01-04 21:55:30",
        "updatedAt": "2024-01-11 21:47:49",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1599,
        "submissionId": 1223,
        "pathogenId": 4,
        "createdAt": "2024-01-04 21:55:30",
        "updatedAt": "2024-01-11 21:47:51",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1600,
        "submissionId": 1223,
        "pathogenId": 2,
        "createdAt": "2024-01-04 21:55:30",
        "updatedAt": "2024-01-11 21:38:04",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1601,
        "submissionId": 1225,
        "pathogenId": 1,
        "createdAt": "2024-01-08 22:10:29",
        "updatedAt": "2024-01-11 21:38:57",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1602,
        "submissionId": 1225,
        "pathogenId": 3,
        "createdAt": "2024-01-08 22:10:29",
        "updatedAt": "2024-01-11 21:47:57",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1603,
        "submissionId": 1225,
        "pathogenId": 4,
        "createdAt": "2024-01-08 22:10:29",
        "updatedAt": "2024-01-11 21:47:58",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1604,
        "submissionId": 1225,
        "pathogenId": 2,
        "createdAt": "2024-01-08 22:10:29",
        "updatedAt": "2024-01-11 21:38:56",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1605,
        "submissionId": 1222,
        "pathogenId": 1,
        "createdAt": "2024-01-08 22:20:26",
        "updatedAt": "2024-01-11 21:30:50",
        "deletedAt": null,
        "result": "positive"
      },
      {
        "id": 1606,
        "submissionId": 1222,
        "pathogenId": 3,
        "createdAt": "2024-01-08 22:20:26",
        "updatedAt": "2024-01-11 21:47:42",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1607,
        "submissionId": 1222,
        "pathogenId": 4,
        "createdAt": "2024-01-08 22:20:26",
        "updatedAt": "2024-01-11 21:47:43",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1608,
        "submissionId": 1222,
        "pathogenId": 2,
        "createdAt": "2024-01-08 22:20:26",
        "updatedAt": "2024-01-11 21:38:12",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1609,
        "submissionId": 1221,
        "pathogenId": 1,
        "createdAt": "2024-01-08 22:31:15",
        "updatedAt": "2024-01-11 21:38:24",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1610,
        "submissionId": 1221,
        "pathogenId": 3,
        "createdAt": "2024-01-08 22:31:15",
        "updatedAt": "2024-01-11 21:47:32",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1611,
        "submissionId": 1221,
        "pathogenId": 4,
        "createdAt": "2024-01-08 22:31:15",
        "updatedAt": "2024-01-11 21:47:34",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1612,
        "submissionId": 1221,
        "pathogenId": 2,
        "createdAt": "2024-01-08 22:31:15",
        "updatedAt": "2024-01-11 21:38:25",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1613,
        "submissionId": 1224,
        "pathogenId": 1,
        "createdAt": "2024-01-08 22:33:09",
        "updatedAt": "2024-01-08 22:33:27",
        "deletedAt": null,
        "result": "inconclusive"
      },
      {
        "id": 1614,
        "submissionId": 1224,
        "pathogenId": 3,
        "createdAt": "2024-01-08 22:33:09",
        "updatedAt": "2024-01-08 22:33:29",
        "deletedAt": null,
        "result": "inconclusive"
      },
      {
        "id": 1615,
        "submissionId": 1224,
        "pathogenId": 4,
        "createdAt": "2024-01-08 22:33:09",
        "updatedAt": "2024-01-08 22:33:31",
        "deletedAt": null,
        "result": "inconclusive"
      },
      {
        "id": 1616,
        "submissionId": 1224,
        "pathogenId": 2,
        "createdAt": "2024-01-08 22:33:09",
        "updatedAt": "2024-01-08 22:33:33",
        "deletedAt": null,
        "result": "inconclusive"
      },
      {
        "id": 1617,
        "submissionId": 1229,
        "pathogenId": 1,
        "createdAt": "2024-01-17 22:14:33",
        "updatedAt": "2024-01-30 21:30:16",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1618,
        "submissionId": 1229,
        "pathogenId": 3,
        "createdAt": "2024-01-17 22:14:33",
        "updatedAt": "2024-01-30 19:09:05",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1619,
        "submissionId": 1229,
        "pathogenId": 4,
        "createdAt": "2024-01-17 22:14:33",
        "updatedAt": "2024-01-30 19:07:08",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1620,
        "submissionId": 1229,
        "pathogenId": 2,
        "createdAt": "2024-01-17 22:14:33",
        "updatedAt": "2024-01-30 21:30:24",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1621,
        "submissionId": 1228,
        "pathogenId": 1,
        "createdAt": "2024-01-17 22:22:42",
        "updatedAt": "2024-01-30 21:29:30",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1622,
        "submissionId": 1228,
        "pathogenId": 3,
        "createdAt": "2024-01-17 22:22:42",
        "updatedAt": "2024-01-30 19:08:56",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1623,
        "submissionId": 1228,
        "pathogenId": 4,
        "createdAt": "2024-01-17 22:22:42",
        "updatedAt": "2024-01-30 19:06:56",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1624,
        "submissionId": 1228,
        "pathogenId": 2,
        "createdAt": "2024-01-17 22:22:42",
        "updatedAt": "2024-01-30 21:29:38",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1625,
        "submissionId": 1231,
        "pathogenId": 1,
        "createdAt": "2024-01-18 21:24:52",
        "updatedAt": "2024-01-30 21:30:55",
        "deletedAt": null,
        "result": "positive"
      },
      {
        "id": 1626,
        "submissionId": 1231,
        "pathogenId": 3,
        "createdAt": "2024-01-18 21:24:52",
        "updatedAt": "2024-01-30 19:09:25",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1627,
        "submissionId": 1231,
        "pathogenId": 4,
        "createdAt": "2024-01-18 21:24:52",
        "updatedAt": "2024-01-30 19:07:24",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1628,
        "submissionId": 1231,
        "pathogenId": 2,
        "createdAt": "2024-01-18 21:24:52",
        "updatedAt": "2024-01-30 21:31:09",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1629,
        "submissionId": 1232,
        "pathogenId": 1,
        "createdAt": "2024-01-18 21:25:01",
        "updatedAt": "2024-01-30 21:31:28",
        "deletedAt": null,
        "result": "positive"
      },
      {
        "id": 1630,
        "submissionId": 1232,
        "pathogenId": 3,
        "createdAt": "2024-01-18 21:25:01",
        "updatedAt": "2024-01-30 19:09:37",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1631,
        "submissionId": 1232,
        "pathogenId": 4,
        "createdAt": "2024-01-18 21:25:01",
        "updatedAt": "2024-01-30 19:07:34",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1632,
        "submissionId": 1232,
        "pathogenId": 2,
        "createdAt": "2024-01-18 21:25:01",
        "updatedAt": "2024-01-30 21:31:56",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1633,
        "submissionId": 1233,
        "pathogenId": 1,
        "createdAt": "2024-01-22 21:57:05",
        "updatedAt": "2024-01-30 21:32:14",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1634,
        "submissionId": 1233,
        "pathogenId": 3,
        "createdAt": "2024-01-22 21:57:05",
        "updatedAt": "2024-01-30 19:09:44",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1635,
        "submissionId": 1233,
        "pathogenId": 4,
        "createdAt": "2024-01-22 21:57:05",
        "updatedAt": "2024-01-30 19:07:57",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1636,
        "submissionId": 1233,
        "pathogenId": 2,
        "createdAt": "2024-01-22 21:57:05",
        "updatedAt": "2024-01-30 21:32:27",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1637,
        "submissionId": 1234,
        "pathogenId": 1,
        "createdAt": "2024-02-06 04:40:22",
        "updatedAt": "2024-02-17 17:19:45",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1638,
        "submissionId": 1234,
        "pathogenId": 3,
        "createdAt": "2024-02-06 04:40:22",
        "updatedAt": "2024-02-15 21:15:33",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1639,
        "submissionId": 1234,
        "pathogenId": 4,
        "createdAt": "2024-02-06 04:40:22",
        "updatedAt": "2024-02-15 21:15:35",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1640,
        "submissionId": 1234,
        "pathogenId": 2,
        "createdAt": "2024-02-06 04:40:22",
        "updatedAt": "2024-02-17 17:19:48",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1641,
        "submissionId": 1236,
        "pathogenId": 1,
        "createdAt": "2024-02-07 20:33:28",
        "updatedAt": "2024-02-07 20:33:28",
        "deletedAt": null,
        "result": "pending"
      },
      {
        "id": 1642,
        "submissionId": 1236,
        "pathogenId": 3,
        "createdAt": "2024-02-07 20:33:28",
        "updatedAt": "2024-02-15 21:16:31",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1643,
        "submissionId": 1236,
        "pathogenId": 4,
        "createdAt": "2024-02-07 20:33:28",
        "updatedAt": "2024-02-15 21:16:32",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1644,
        "submissionId": 1236,
        "pathogenId": 2,
        "createdAt": "2024-02-07 20:33:28",
        "updatedAt": "2024-02-07 20:33:28",
        "deletedAt": null,
        "result": "pending"
      },
      {
        "id": 1645,
        "submissionId": 1235,
        "pathogenId": 1,
        "createdAt": "2024-02-07 20:37:51",
        "updatedAt": "2024-02-07 20:37:51",
        "deletedAt": null,
        "result": "pending"
      },
      {
        "id": 1646,
        "submissionId": 1235,
        "pathogenId": 3,
        "createdAt": "2024-02-07 20:37:51",
        "updatedAt": "2024-02-15 21:16:18",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1647,
        "submissionId": 1235,
        "pathogenId": 4,
        "createdAt": "2024-02-07 20:37:51",
        "updatedAt": "2024-02-15 21:16:19",
        "deletedAt": null,
        "result": "negative"
      },
      {
        "id": 1648,
        "submissionId": 1235,
        "pathogenId": 2,
        "createdAt": "2024-02-07 20:37:51",
        "updatedAt": "2024-02-07 20:37:51",
        "deletedAt": null,
        "result": "pending"
      },
      {
        "id": 1649,
        "submissionId": 1238,
        "pathogenId": 1,
        "createdAt": "2024-02-15 16:26:35",
        "updatedAt": "2024-02-15 16:26:35",
        "deletedAt": null,
        "result": "pending"
      },
      {
        "id": 1650,
        "submissionId": 1238,
        "pathogenId": 3,
        "createdAt": "2024-02-15 16:26:35",
        "updatedAt": "2024-02-15 16:26:35",
        "deletedAt": null,
        "result": "pending"
      },
      {
        "id": 1651,
        "submissionId": 1238,
        "pathogenId": 4,
        "createdAt": "2024-02-15 16:26:35",
        "updatedAt": "2024-02-15 16:26:35",
        "deletedAt": null,
        "result": "pending"
      },
      {
        "id": 1652,
        "submissionId": 1238,
        "pathogenId": 2,
        "createdAt": "2024-02-15 16:26:35",
        "updatedAt": "2024-02-15 16:26:35",
        "deletedAt": null,
        "result": "pending"
      },
      {
        "id": 1653,
        "submissionId": 1237,
        "pathogenId": 1,
        "createdAt": "2024-02-15 16:42:04",
        "updatedAt": "2024-02-15 16:42:04",
        "deletedAt": null,
        "result": "pending"
      },
      {
        "id": 1654,
        "submissionId": 1237,
        "pathogenId": 3,
        "createdAt": "2024-02-15 16:42:04",
        "updatedAt": "2024-02-15 16:42:04",
        "deletedAt": null,
        "result": "pending"
      },
      {
        "id": 1655,
        "submissionId": 1237,
        "pathogenId": 4,
        "createdAt": "2024-02-15 16:42:04",
        "updatedAt": "2024-02-15 16:42:04",
        "deletedAt": null,
        "result": "pending"
      },
      {
        "id": 1656,
        "submissionId": 1237,
        "pathogenId": 2,
        "createdAt": "2024-02-15 16:42:04",
        "updatedAt": "2024-02-15 16:42:04",
        "deletedAt": null,
        "result": "pending"
      },
      {
        "id": 1657,
        "submissionId": 1239,
        "pathogenId": 1,
        "createdAt": "2024-02-15 16:51:49",
        "updatedAt": "2024-02-15 16:51:49",
        "deletedAt": null,
        "result": "pending"
      },
      {
        "id": 1658,
        "submissionId": 1239,
        "pathogenId": 3,
        "createdAt": "2024-02-15 16:51:49",
        "updatedAt": "2024-02-15 16:51:49",
        "deletedAt": null,
        "result": "pending"
      },
      {
        "id": 1659,
        "submissionId": 1239,
        "pathogenId": 4,
        "createdAt": "2024-02-15 16:51:49",
        "updatedAt": "2024-02-15 16:51:49",
        "deletedAt": null,
        "result": "pending"
      },
      {
        "id": 1660,
        "submissionId": 1239,
        "pathogenId": 2,
        "createdAt": "2024-02-15 16:51:49",
        "updatedAt": "2024-02-15 16:51:49",
        "deletedAt": null,
        "result": "pending"
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('submission_pathogen', null, {});
  }
};
