/*
 Navicat Premium Data Transfer

 Source Server         : myServer
 Source Server Type    : MySQL
 Source Server Version : 80012
 Source Host           : localhost:3306
 Source Schema         : shoppingdb

 Target Server Type    : MySQL
 Target Server Version : 80012
 File Encoding         : 65001

 Date: 15/09/2018 10:34:11
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for comment
-- ----------------------------
DROP TABLE IF EXISTS `comment`;
CREATE TABLE `comment`  (
  `discuss` int(20) NOT NULL COMMENT '商品留言编号',
  `userId` int(20) NULL DEFAULT NULL COMMENT '外键（关联userInfo表）',
  `pId` int(20) NULL DEFAULT NULL COMMENT '外键（关联product表）',
  `title` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '商品评价标题',
  `content` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '商品评价内容',
  `pltime` datetime(0) NULL DEFAULT NULL COMMENT '评价时间',
  PRIMARY KEY (`discuss`) USING BTREE,
  INDEX `fk_userId4`(`userId`) USING BTREE,
  INDEX `fk_pId3`(`pId`) USING BTREE,
  CONSTRAINT `fk_pId3` FOREIGN KEY (`pId`) REFERENCES `product` (`pid`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `fk_userId4` FOREIGN KEY (`userId`) REFERENCES `userinfo` (`userid`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for cpdl
-- ----------------------------
DROP TABLE IF EXISTS `cpdl`;
CREATE TABLE `cpdl`  (
  `dlcode` int(20) NOT NULL COMMENT '产品所属大类编号',
  `dlname` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '所属大类',
  PRIMARY KEY (`dlcode`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for cpxl
-- ----------------------------
DROP TABLE IF EXISTS `cpxl`;
CREATE TABLE `cpxl`  (
  `xlcode` int(20) NOT NULL COMMENT '所属小类编号',
  `dlcode` int(20) NULL DEFAULT NULL COMMENT '外键（关联 dlcode 表）',
  `xlname` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '所属小类',
  PRIMARY KEY (`xlcode`) USING BTREE,
  INDEX `fk_dlcode`(`dlcode`) USING BTREE,
  CONSTRAINT `fk_dlcode` FOREIGN KEY (`dlcode`) REFERENCES `cpdl` (`dlcode`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for order
-- ----------------------------
DROP TABLE IF EXISTS `order`;
CREATE TABLE `order`  (
  `orderId` int(20) NOT NULL COMMENT '订单编号',
  `userId` int(20) NULL DEFAULT NULL COMMENT '外键（关联userInfo)',
  `shrId` int(20) NULL DEFAULT NULL COMMENT '外键（关联shrInfo)',
  `otime` datetime(0) NULL DEFAULT NULL COMMENT '下单时间',
  PRIMARY KEY (`orderId`) USING BTREE,
  INDEX `fk_userId`(`userId`) USING BTREE,
  INDEX `fk_shrId`(`shrId`) USING BTREE,
  CONSTRAINT `fk_shrId` FOREIGN KEY (`shrId`) REFERENCES `shrinfo` (`shrid`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `fk_userId` FOREIGN KEY (`userId`) REFERENCES `userinfo` (`userid`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for product
-- ----------------------------
DROP TABLE IF EXISTS `product`;
CREATE TABLE `product`  (
  `pId` int(20) NOT NULL COMMENT '产品编号',
  `xlcode` int(20) NULL DEFAULT NULL COMMENT '所属小类',
  `pName` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '产品名称',
  `plocation` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '产品产地',
  `pphoto` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '产品图片',
  `pprice` int(20) NULL DEFAULT NULL COMMENT '市场价格',
  `present` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '产品介绍',
  `stock` int(20) NULL DEFAULT NULL COMMENT '库存量',
  PRIMARY KEY (`pId`) USING BTREE,
  INDEX `fk_xlcode`(`xlcode`) USING BTREE,
  CONSTRAINT `fk_xlcode` FOREIGN KEY (`xlcode`) REFERENCES `cpxl` (`xlcode`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for shrinfo
-- ----------------------------
DROP TABLE IF EXISTS `shrinfo`;
CREATE TABLE `shrinfo`  (
  `shrId` int(20) NOT NULL COMMENT '收货人编号',
  `userId` int(20) NULL DEFAULT NULL COMMENT '用户编号',
  `name` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '姓名',
  `addr` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '收货地址',
  `postal` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '邮编',
  `tel` char(11) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '手机号',
  PRIMARY KEY (`shrId`) USING BTREE,
  INDEX `fk_userId2`(`userId`) USING BTREE,
  CONSTRAINT `fk_userId2` FOREIGN KEY (`userId`) REFERENCES `userinfo` (`userid`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for subrecord
-- ----------------------------
DROP TABLE IF EXISTS `subrecord`;
CREATE TABLE `subrecord`  (
  `subId` int(20) NOT NULL COMMENT '明细记录编号',
  `orderId` int(20) NULL DEFAULT NULL COMMENT '外键（关联order表）',
  `pId` int(20) NULL DEFAULT NULL COMMENT '外键（关联userInfo表）',
  `pcount` int(11) NULL DEFAULT NULL COMMENT '购买数量',
  PRIMARY KEY (`subId`) USING BTREE,
  INDEX `fk_orderId`(`orderId`) USING BTREE,
  INDEX `fk_pId`(`pId`) USING BTREE,
  CONSTRAINT `fk_orderId` FOREIGN KEY (`orderId`) REFERENCES `order` (`orderid`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `fk_pId` FOREIGN KEY (`pId`) REFERENCES `product` (`pid`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for userinfo
-- ----------------------------
DROP TABLE IF EXISTS `userinfo`;
CREATE TABLE `userinfo`  (
  `userId` int(20) NOT NULL COMMENT '用户编号',
  `userName` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '用户名',
  `userpwd` char(10) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '密码',
  `sex` bit(1) NULL DEFAULT NULL COMMENT '性别',
  `email` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `identityNum` varchar(18) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '身份证号',
  `usertel` char(11) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '手机号',
  `useraddr` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '地址',
  `photo` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '头像',
  PRIMARY KEY (`userId`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

SET FOREIGN_KEY_CHECKS = 1;
