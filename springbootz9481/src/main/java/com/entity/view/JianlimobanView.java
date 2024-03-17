package com.entity.view;

import com.entity.JianlimobanEntity;

import com.baomidou.mybatisplus.annotations.TableName;
import org.apache.commons.beanutils.BeanUtils;
import java.lang.reflect.InvocationTargetException;

import java.io.Serializable;
 

/**
 * 简历模板
 * 后端返回视图实体辅助类   
 * （通常后端关联的表或者自定义的字段需要返回使用）
 * @author 
 * @email 
 * @date 2021-03-29 21:10:33
 */
@TableName("jianlimoban")
public class JianlimobanView  extends JianlimobanEntity implements Serializable {
	private static final long serialVersionUID = 1L;

	public JianlimobanView(){
	}
 
 	public JianlimobanView(JianlimobanEntity jianlimobanEntity){
 	try {
			BeanUtils.copyProperties(this, jianlimobanEntity);
		} catch (IllegalAccessException | InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
 		
	}
}
