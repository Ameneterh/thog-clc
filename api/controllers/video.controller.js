import Video from "../models/video.model.js";
import { errorHandler } from "../utils/error.js";

export const addvideo = async (req, res, next) => {
  console.log(req.user);
  if (!req.user) {
    return next(errorHandler(403, "You are not allowed to create a post"));
  }

  if (
    !req.body.videotitle ||
    !req.body.videodescription ||
    !req.body.category ||
    !req.body.videoId
  ) {
    return next(errorHandler(400, "Please, provide all required fields"));
  }
  const newVideo = new Video({
    ...req.body,
    userId: req.user.id,
  });

  try {
    const savedVideo = await newVideo.save();
    res.status(201).json(savedVideo);
  } catch (error) {
    next(error);
  }
};

export const getvideos = async (req, res, next) => {
  try {
    const startIndex = parseInt(req.query.startIndex) || 0;
    const limit = parseInt(req.query.limit) || 9;
    const sortDirection = req.query.order || "asc" ? 1 : -1;
    const videos = await Video.find({
      ...(req.query.userId && { userId: req.query.userId }),
      ...(req.query.category && { category: req.query.category }),
      ...(req.query.videoId && { _id: req.query.videoId }),
      ...(req.query.searchTerm && {
        $or: [
          { videotitle: { $regex: req.query.searchTerm, $options: "i" } },
          { videodescription: { $regex: req.query.searchTerm, $options: "i" } },
        ],
      }),
    })
      .sort({ updatedAt: sortDirection })
      .skip(startIndex)
      .limit(limit);

    const totalVideos = await Video.countDocuments();
    const now = new Date();
    const oneMonthAgo = new Date(
      now.getFullYear(),
      now.getMonth() - 1,
      now.getDate()
    );

    const lastMonthVideos = await Video.countDocuments({
      createdAt: { $gte: oneMonthAgo },
    });

    res.status(200).json({ videos, totalVideos, lastMonthVideos });
  } catch (error) {
    next(error);
  }
};

export const getVideoById = async (req, res, next) => {
  try {
    const video = await Video.findById(req.params.videoId);
    if (!video) {
      return next(errorHandler(404, "Data not found!"));
    }
    res.status(200).json(video);
  } catch (error) {
    next(error);
  }
};

export const deletevideo = async (req, res, next) => {
  if (!req.user.isAdmin && req.user.id !== req.params.userId) {
    return next(
      errorHandler(403, "You are not allowed to delete this Video entry")
    );
  }
  try {
    await Video.findByIdAndDelete(req.params.videoId);
    res
      .status(200)
      .json(`The video entry with id ${req.params.videoId} has been deleted`);
  } catch (error) {
    next(error);
  }
};

export const updatevideo = async (req, res, next) => {
  console.log(req.user);
  if (!req.user.isAdmin && req.user.id !== req.params.userId) {
    return next(
      errorHandler(403, "You are not allowed to update this video entry")
    );
  }

  try {
    const updatedVideo = await Video.findByIdAndUpdate(
      req.params.videoId,
      {
        $set: {
          videotitle: req.body.videotitle,
          videodescription: req.body.videodescription,
          category: req.body.category,
          videoId: req.body.videoId,
        },
      },
      { new: true }
    );
    res.status(200).json(updatedVideo);
  } catch (error) {
    next(error);
  }
};

export const likeVideo = async (req, res, next) => {
  try {
    const video = await Video.findById(req.params.videoId);
    if (!video) {
      return next(errorHandler(404, "Requested video not found"));
    }

    const userIndex = video.likes.indexOf(req.user.userId);
    if (userIndex === -1) {
      video.numberOfLikes += 1;
      video.likes.push(req.user.userId);
    } else {
      video.numberOfLikes -= 1;
      video.likes.splice(userIndex, 1);
    }
    await video.save();
    res.status(200).json(video);
  } catch (error) {
    next(error);
  }
};
