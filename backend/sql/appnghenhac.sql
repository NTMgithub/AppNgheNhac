-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th2 23, 2021 lúc 02:42 PM
-- Phiên bản máy phục vụ: 10.4.17-MariaDB
-- Phiên bản PHP: 8.0.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `appnghenhac`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `albums`
--

CREATE TABLE `albums` (
  `maAlbum` int(10) NOT NULL,
  `maBaiHat` int(10) NOT NULL,
  `maNgheSi` int(10) NOT NULL,
  `thoiGianPhatHanh` datetime(5) NOT NULL,
  `anhAlbum` varchar(225) NOT NULL,
  `mieuTaAlbum` varchar(225) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `bai_hat`
--

CREATE TABLE `bai_hat` (
  `maBaiHat` int(10) NOT NULL,
  `tenBaiHat` varchar(225) NOT NULL,
  `maAlbum` int(10) NOT NULL,
  `maNgheSi` int(10) NOT NULL,
  `maTheLoai` int(10) NOT NULL,
  `loiBaiHat` varchar(225) NOT NULL,
  `anhBaiHat` varchar(225) NOT NULL,
  `urlBaiHat` varchar(225) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `binhluan`
--

CREATE TABLE `binhluan` (
  `maBinhLuan` int(10) NOT NULL,
  `maNguoiDung` int(10) NOT NULL,
  `maBaiHat` int(10) NOT NULL,
  `noiDungBinhLuan` varchar(225) NOT NULL,
  `thoiGianBinhLuan` datetime(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `danh_sach_bai_hat_yeu_thich`
--

CREATE TABLE `danh_sach_bai_hat_yeu_thich` (
  `maDSYT` int(11) NOT NULL,
  `maBaiHat` int(11) NOT NULL,
  `maNguoiDung` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `nghe_si`
--

CREATE TABLE `nghe_si` (
  `maNgheSi` int(10) NOT NULL,
  `tenNgheSi` varchar(225) NOT NULL,
  `anhNgheSi` varchar(225) NOT NULL,
  `mieuTaNgheSi` varchar(225) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `playlists`
--

CREATE TABLE `playlists` (
  `maPlaylists` int(10) NOT NULL,
  `tenPlaylist` int(225) NOT NULL,
  `maBaiHat` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `playlist_album_yeu_thich`
--

CREATE TABLE `playlist_album_yeu_thich` (
  `maPlaylistYT` int(10) NOT NULL,
  `maPlaylists` int(10) NOT NULL,
  `maNguoiDung` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `the_loai`
--

CREATE TABLE `the_loai` (
  `maTheLoai` int(10) NOT NULL,
  `tenTheLoai` varchar(225) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `user_account`
--

CREATE TABLE `user_account` (
  `maNguoiDung` int(10) NOT NULL,
  `tenDangNhap` varchar(20) NOT NULL,
  `matKhau` varchar(20) NOT NULL,
  `tenNguoiDung` varchar(225) NOT NULL,
  `anhNguoiDung` varchar(225) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `albums`
--
ALTER TABLE `albums`
  ADD PRIMARY KEY (`maAlbum`),
  ADD KEY `maBaiHat` (`maBaiHat`,`maNgheSi`);

--
-- Chỉ mục cho bảng `bai_hat`
--
ALTER TABLE `bai_hat`
  ADD PRIMARY KEY (`maBaiHat`),
  ADD KEY `maAlbum` (`maAlbum`,`maNgheSi`,`maTheLoai`);

--
-- Chỉ mục cho bảng `binhluan`
--
ALTER TABLE `binhluan`
  ADD PRIMARY KEY (`maBinhLuan`),
  ADD KEY `maNguoiDung` (`maNguoiDung`),
  ADD KEY `maBaiHat` (`maBaiHat`);

--
-- Chỉ mục cho bảng `danh_sach_bai_hat_yeu_thich`
--
ALTER TABLE `danh_sach_bai_hat_yeu_thich`
  ADD PRIMARY KEY (`maDSYT`),
  ADD KEY `maNguoiDung` (`maNguoiDung`),
  ADD KEY `maBaiHat` (`maBaiHat`);

--
-- Chỉ mục cho bảng `nghe_si`
--
ALTER TABLE `nghe_si`
  ADD PRIMARY KEY (`maNgheSi`);

--
-- Chỉ mục cho bảng `playlists`
--
ALTER TABLE `playlists`
  ADD PRIMARY KEY (`maPlaylists`),
  ADD KEY `maBaiHat` (`maBaiHat`);

--
-- Chỉ mục cho bảng `playlist_album_yeu_thich`
--
ALTER TABLE `playlist_album_yeu_thich`
  ADD PRIMARY KEY (`maPlaylistYT`),
  ADD KEY `maNguoiDung` (`maNguoiDung`),
  ADD KEY `maPlaylists` (`maPlaylists`);

--
-- Chỉ mục cho bảng `the_loai`
--
ALTER TABLE `the_loai`
  ADD PRIMARY KEY (`maTheLoai`);

--
-- Chỉ mục cho bảng `user_account`
--
ALTER TABLE `user_account`
  ADD PRIMARY KEY (`maNguoiDung`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `albums`
--
ALTER TABLE `albums`
  MODIFY `maAlbum` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `bai_hat`
--
ALTER TABLE `bai_hat`
  MODIFY `maBaiHat` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `binhluan`
--
ALTER TABLE `binhluan`
  MODIFY `maBinhLuan` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `danh_sach_bai_hat_yeu_thich`
--
ALTER TABLE `danh_sach_bai_hat_yeu_thich`
  MODIFY `maDSYT` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `nghe_si`
--
ALTER TABLE `nghe_si`
  MODIFY `maNgheSi` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `playlists`
--
ALTER TABLE `playlists`
  MODIFY `maPlaylists` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `playlist_album_yeu_thich`
--
ALTER TABLE `playlist_album_yeu_thich`
  MODIFY `maPlaylistYT` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `the_loai`
--
ALTER TABLE `the_loai`
  MODIFY `maTheLoai` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `user_account`
--
ALTER TABLE `user_account`
  MODIFY `maNguoiDung` int(10) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
