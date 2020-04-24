/*
 Navicat Premium Data Transfer

 Source Server         : LOCAL
 Source Server Type    : MySQL
 Source Server Version : 100135
 Source Host           : localhost:3306
 Source Schema         : ejercicio_toptive

 Target Server Type    : MySQL
 Target Server Version : 100135
 File Encoding         : 65001

 Date: 24/04/2020 06:14:06
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for sesion
-- ----------------------------
DROP TABLE IF EXISTS `sesion`;
CREATE TABLE `sesion`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id de calculo',
  `calculo` varchar(255) CHARACTER SET armscii8 COLLATE armscii8_general_ci NOT NULL COMMENT 'calculo a almacenar',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 42 CHARACTER SET = armscii8 COLLATE = armscii8_general_ci ROW_FORMAT = Compact;

SET FOREIGN_KEY_CHECKS = 1;
